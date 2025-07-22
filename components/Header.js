import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold">AI Emotion</h1>
                <p className="text-lg">Real-Time Webcam Emotion Detection</p>
            </div>
        </header>
    );
};

export default Header;
