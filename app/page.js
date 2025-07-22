
import React from 'react';
import WebcamEmotion from "@/components/WebcamEmotion";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-[400px] bg-gray-100 text-gray-900">
      <Header />
      <main className="container mx-auto flex justify-center">
        <WebcamEmotion />
      </main>
    </div>
  );
}

