
import React from 'react';
import WebcamEmotion from "@/components/WebcamEmotion";
import Header from "@/components/Header";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
  <Header />
  <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center items-start">
    <WebcamEmotion />
  </main>
</div>
  );
}

