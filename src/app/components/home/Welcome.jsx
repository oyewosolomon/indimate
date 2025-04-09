"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const InfiniteHorizontalRow = ({ images, direction = 'right', speed = 20 }) => {
  // Calculate animation properties based on direction
  const animationProps = {
    right: {
      animate: {
        x: ['0%', '-100%'],
      },
    },
    left: {
      animate: {
        x: ['-100%', '0%'],
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div 
        {...animationProps[direction]}
        className="flex gap-8 w-max"
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: 'linear',
        }}
      >
        {/* Duplicate images for seamless looping */}
        {[...images, ...images].map((img, i) => (
          <div key={`${img.alt}-${i}`} className="aspect-[4/5] w-[300px] md:w-[400px] overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
              priority={i < 3} // Only prioritize first set of images
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Welcome = () => {
  const topRowImages = [
    { src: "/assets/images/image_3.png", alt: "Beachside wedding arch with flowers" },
    { src: "/assets/images/g-5-min.JPG", alt: "Beachside wedding arch with flowers" },
    { src: "/assets/images/g-6-min.JPG", alt: "Beachside wedding arch with flowers" },
    { src: "/assets/images/g-7-min.JPG", alt: "Beachside wedding arch with flowers" },
    { src: "/assets/images/image_1.png", alt: "Bride against white backdrop" },
    { src: "/assets/images/image_4.png", alt: "Couple under floral arch" },
  ];

  const bottomRowImages = [
    { src: "/assets/images/g-1-min.JPG", alt: "Couple under floral arch" },
    { src: "/assets/images/g-2-min.JPG", alt: "Beachside wedding arch with flowers" },
    { src: "/assets/images/g-3-min.JPG", alt: "Bride against white backdrop" },
    { src: "/assets/images/g-4-min.JPG", alt: "Bride against white backdrop" },
    { src: "/assets/images/g-8-min.JPG", alt: "Bride against white backdrop" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-gray-800 overflow-hidden">
      {/* Hero Text Section */}
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl leading-10 md:text-7xl font-medium text-gray-800">
          Dreamy, Ethereal, Curated for the
          <br />
          Unconventional Couple
        </h1>
        <p className="text-xl text-gray-600">
          We are so happy to have you here, and you&apos;ve come to the right place.
        </p>
      </div>

      {/* Infinite Scrolling Image Rows */}
      <div className="space-y-8">
        {/* Top row - scrolls right */}
        <InfiniteHorizontalRow 
          images={topRowImages} 
          direction="right" 
          speed={20}
        />
        
        {/* Bottom row - scrolls left */}
        <InfiniteHorizontalRow 
          images={bottomRowImages} 
          direction="left" 
          speed={20}
        />
      </div>
    </div>
  );
};

export default Welcome;