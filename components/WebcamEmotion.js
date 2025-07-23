'use client'
import React, { useState, useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const WebcamEmotion = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [modelsLoaded, setModelsLoaded] = useState(false);

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = '/models';
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
                faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
            ]);
            setModelsLoaded(true);
        };
        loadModels();
    }, []);

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: {} })
            .then(stream => {
                if (videoRef.current) videoRef.current.srcObject = stream;
            })
            .catch(err => console.error(err));
    };

    const handleVideoPlay = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
            if (video && video.readyState === 4) {
                const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender();
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                if (resizedDetections && resizedDetections.length > 0) {
                    resizedDetections.forEach(detection => {
                        const box = detection.detection.box;
                        const expressions = detection.expressions;
                        const age = detection.age;
                        const gender = detection.gender;

                        // Draw bounding box
                        const ctx = canvas.getContext('2d');
                        ctx.strokeStyle = '#00ff00';
                        ctx.lineWidth = 6;
                        ctx.strokeRect(box.x, box.y, box.width, box.height);

                        // Get dominant emotion
                        const dominantEmotion = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);

                        // Draw emotion, age, and gender
                        ctx.fillStyle = '#00ff00';
                        ctx.font = '20px Arial';
                        ctx.fillText(`${dominantEmotion} (${Math.round(age)}, ${gender})`, box.x, box.y - 10);
                    });
                }
            }
        }, 200);
    };

    useEffect(() => {
        if (modelsLoaded) {
            startVideo();
        }
    }, [modelsLoaded]);

    return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg border border-gray-200">
  <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">
    Live Emotion, Age & Gender Detection
  </h2>

  <div className="relative w-full aspect-video mb-4">
    <video
      ref={videoRef}
      autoPlay
      muted
      onPlay={handleVideoPlay}
      className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
    />
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
    />
  </div>

  {!modelsLoaded && (
    <p className="text-center text-gray-600">Please wait...</p>
  )}
</div>

    );
};

export default WebcamEmotion;

