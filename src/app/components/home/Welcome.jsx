"use client"

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useInView, useTransform } from 'framer-motion';

const ScrollAnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      ref={ref}
      className={`aspect-[4/5] overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div style={{ y }} className="h-full w-full">
        {src.startsWith('/assets') ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const Welcome = () => {
  // Ref for the hero section
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform the opacity based on scroll progress
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-gray-800">
      {/* Hero Text Section */}
      <motion.div 
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="text-center mb-16 space-y-6 bg-white text-gray-800"
      >
        <ScrollAnimatedSection>
          <h1 className="text-4xl leading-10 md:text-7xl font-medium text-gray-800">
            Dreamy, Ethereal, Curated for the
            <br />
            Unconventional Couple
          </h1>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection>
          <p className="text-xl  text-gray-600">
            We are so happy to have you here, and you&apos;ve come to the right place.
          </p>
        </ScrollAnimatedSection>
      </motion.div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8">
        <ParallaxImage
          src="/assets/images/image_3.png"
          alt="Beachside wedding arch with flowers"
        />

        <ParallaxImage
          src="/assets/images/image_1.png"
          alt="Bride against white backdrop"
        />

        <ParallaxImage
          src="/assets/images/image_4.png"
          alt="Couple under floral arch"
        />
      </div>

     
    </div>
  );
};

export default Welcome;