# AI Emotion: Real-time Webcam Emotion, Age, and Gender Detection

## Project Overview

AI Emotion is a web application that leverages in-browser machine learning to perform real-time detection of emotions, age, and gender from a live webcam feed. Built with Next.js and `face-api.js`, this project demonstrates how powerful AI capabilities can be integrated directly into a web browser, providing instant visual feedback without relying on backend API calls for core detection logic.

## Features

*   **Real-time Detection:** Analyzes webcam feed continuously for facial attributes.
*   **Emotion Recognition:** Identifies dominant emotions (happy, sad, angry, neutral, surprised, fearful, disgusted).
*   **Age Estimation:** Provides an approximate age for detected individuals.
*   **Gender Identification:** Determines the gender of detected individuals.
*   **In-Browser Processing:** All face detection and analysis are performed client-side using `face-api.js`, ensuring privacy and low latency.
*   **Intuitive UI:** Displays detection results directly overlaid on the webcam feed for clear, integrated visual feedback.
*   **Modern Stack:** Built with Next.js, React, and styled with Tailwind CSS for a clean and responsive user experience.

## Technologies Used

*   **Next.js:** React framework for building web applications.
*   **React:** JavaScript library for building user interfaces.
*   **Tailwind CSS:** Utility-first CSS framework for rapid styling.
*   **`face-api.js`:** JavaScript API for face detection and face recognition in the browser, built on TensorFlow.js.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

If you haven't already, clone the project repository:

```bash
git clone [https://github.com/Sakib543/Ai-Detect-Emotion-Gender-Age]
```

### 2. Install Dependencies

Install the necessary Node.js packages:

```bash
npm install
```

### 3. Download `face-api.js` Models (Crucial Step!)

`face-api.js` requires pre-trained machine learning models to function. These models are not included in the `npm` package and must be downloaded separately.

1.  **Download the `weights` directory:**
    Go to the official `face-api.js` GitHub repository: [https://github.com/justadudewhohacks/face-api.js](https://github.com/justadudewhohacks/face-api.js)
    Download the entire `weights` directory from this repository.

2.  **Place models in `public/models`:**
    In your project's root directory, create a folder named `public/models` if it doesn't already exist.
    Copy all the contents (all `.json` and `.weights` files) from the downloaded `weights` directory into your project's `public/models` directory.

    Your `public/models` directory should contain files like:
    *   `age_gender_model-shard1`
    *   `age_gender_model-weights_manifest.json`
    *   `face_expression_model-shard1`
    *   `face_expression_model-weights_manifest.json`
    *   `face_landmark_68_model-shard1`
    *   `face_landmark_68_model-weights_manifest.json`
    *   `face_recognition_model-shard1`
    *   `face_recognition_model-weights_manifest.json`
    *   `tiny_face_detector_model-shard1`
    *   `tiny_face_detector_model-weights_manifest.json`
    *   ...and any other related files.

### 4. Run the Application

Start the Next.js development server:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:3000` in your web browser.

## Usage

1.  **Grant Camera Access:** Upon opening the application, your browser will likely ask for permission to access your webcam. Please grant this permission.
2.  **Live Detection:** Once camera access is granted and the models are loaded (a "Loading models, please wait..." message will appear briefly), the application will start detecting faces in real-time.
3.  **On-Screen Overlays:** For each detected face, you will see:
    *   A bounding box.
    *   The dominant emotion (e.g., "happy").
    *   The estimated age.
    *   The detected gender.

## Contributing

Feel free to fork this repository and contribute to its development.
