import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MidNav from './MidNav';
import Welcome from './Welcome';

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className='h-screen w-full sticky top-0 -z-10'>
        <div 
          className='absolute inset-0 bg-[url("/assets/images/image_2.png")] bg-cover bg-center bg-no-repeat'
          style={{
            willChange: 'transform'
          }}
        />
      </div>

      {/* Content that will scroll over the hero */}
      <div className="relative bg-white min-h-screen w-full">
        <MidNav/>
        <Welcome/>
      </div>
    </div>
  );
};

export default Hero;