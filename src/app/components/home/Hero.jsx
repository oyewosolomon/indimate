import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MidNav from './MidNav';
import Welcome from './Welcome';

const Hero = () => {
  return (
    <div className="relative w-full z-20">
      {/* Hero Section */}
      <div className="h-screen w-full sticky top-0 z-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/assets/images/image_2.png')] bg-cover bg-center bg-no-repeat"
          style={{
            willChange: 'transform',
          }}
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white/80 tracking-widest text-5xl md:text-6xl font-bold">Intimate</h1>
        </div>
      </div>

      {/* Content that will scroll over the hero */}
      <div className="relative bg-white min-h-screen w-full z-20">
        <MidNav />
        <Welcome />
      </div>
    </div>
  );
};

export default Hero;
