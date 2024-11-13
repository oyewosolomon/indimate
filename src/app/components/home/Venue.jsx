"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Venue() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const dividerVariants = {
    hidden: { 
      scaleY: 0,
      opacity: 0
    },
    visible: { 
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" ref={containerRef}>
      <div className="fixed inset-0 z-[-1]">
        <Image 
          src="/assets/images/image_5.png" 
          alt="Venue Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="object-cover"
        />
      </div>

      <motion.div 
        className="flex flex-col items-center justify-center h-full text-center text-white bg-black/60"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-5xl md:text-6xl mb-16"
          variants={itemVariants}
        >
          Venue Capacity
        </motion.h1>
        
        <div className="flex items-center space-x-12 md:space-x-28">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">50 people</h1>
            <p className="text-md md:text-lg">Theatre Settings</p>
          </motion.div>

          <motion.div 
            className="w-[4px] h-40 bg-white"
            variants={dividerVariants}
          />

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">20-40 Guests</h1>
            <p className="text-md md:text-lg">Table setting style</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
