"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ScrollReveal = ({ children, className }) => {
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

const ParallaxImage = ({ src, alt, width, height, layout, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <motion.div style={{ y, scale }} className="h-full w-full">
        <Image 
          src={src} 
          alt={alt} 
          className="object-cover w-full h-full"
          width={width}
          height={height}
          layout={layout}
        />
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} id='portfolio' className="w-full z-20 bg-white text-black">
      {/* Header Section with Fade Effect */}
      <motion.h1 
        className="text-5xl text-center mb-12"
        style={{ opacity: headerOpacity, y: headerY }}
      >
        Cozy gatherings, unforgettable memories.
      </motion.h1>
      
      {/* Photo Grid with Parallax */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-1  gap-4 mb-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ParallaxImage 
          src="/assets/images/Group_7685.png" 
          alt="Wedding couple" 
          className="rounded-lg "
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="hidden">
        <ParallaxImage 
          src="/assets/images/gallery-1.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-2.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-3.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-4.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-5.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-6.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-7.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-8.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/gallery-9.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        <ParallaxImage 
          src="/assets/images/full-planning.jpg" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
         <ParallaxImage 
          src="/assets/images/gallery-11.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
         <ParallaxImage 
          src="/assets/images/gallery-12.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
         <ParallaxImage 
          src="/assets/images/gallery-13.png" 
          alt="Wedding couple" 
          className="block md:hidden"
          width={100}
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        </div>
      </motion.div>

      {/* Private Dining Section */}
      <div className='max-w-7xl z-20 bg-white text-black mx-auto px-4 py-8'>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <ScrollReveal>
              <h1 className="text-4xl md:text-7xl">Our private dining space</h1>
            </ScrollReveal>
            
            <ScrollReveal>
              <h3 className="text-xl">Exciting News for Wedding Clients!</h3>
            </ScrollReveal>

            <Image 
              src="/assets/images/dinning.jpg" 
              className='w-full block md:hidden' 
              width={450} 
              height={300} 
              alt='Dining'
            />
            
            <ScrollReveal>
              <p className="text-gray-700 text-base ">
                We&apos;re thrilled to announce a special offer for our private dining space! When you book us to plan your wedding, you can now enjoy exclusive discounts on our intimate venue for all your pre-wedding celebrations, such as bridal showers, engagement parties, and pre-wedding photoshoots.
              </p>
            </ScrollReveal>
            
            <ScrollReveal>
              <p className="text-gray-700 text-base">
                Transform your special moments into unforgettable experiences in our beautifully designed space, perfect for small gatherings. This limited-time offer makes it easier than ever to celebrate your journey to &quot;I do.&quot; Contact us to learn more and secure your date!
              </p>
            </ScrollReveal>
          </div>
          
          <ParallaxImage 
            src="/assets/images/image_6.png" 
            alt="Cocktail preparation" 
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>

      <motion.div 
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.8 }}
       className='w-full mx-auto'>
        <Image 
          src="/assets/images/Artboard.png" 
          alt="Venue Background" 
          width={1200} // native width
          height={600} // native height
          layout="responsive"
        />
      </motion.div>
    </div>
  );
};

export default Gallery;