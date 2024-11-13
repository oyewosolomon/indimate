"use client";

import Image from 'next/image';

export default function Venue() {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/assets/images/image_5.png" 
          alt="Venue Background" 
          fill
          style={{ objectFit: 'cover' }}
          quality={100} 
          className="object-cover"
        />
      </div>

      <div 
        className="relative flex flex-col items-center justify-center h-full text-center text-white "
      >
        
        <h1 
          className="text-5xl md:text-6xl mb-16"
        >Venue Capacity</h1>

        <div className="flex items-center space-x-12 md:space-x-28">
          <div>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">50 people</h1>
            <p className="text-md md:text-lg">Theatre Settings</p>
          </div>

          <div className="w-[4px] h-40 bg-white" />

          <div>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">20-40 Guests</h1>
            <p className="text-md md:text-lg">Table setting style</p>
          </div>
        </div>
      </div>
    </div>
  );
}
