"use client"

import { useRef, type CSSProperties, type ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
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

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
}

const ParallaxImage = ({ src, alt, width, height, className, style }: ParallaxImageProps) => {
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
          style={style}
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
      {/* Private Dining Section */}
      <div className='max-w-7xl z-20 bg-white text-black mx-auto px-4 py-8'>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-4xl md:text-7xl">Our private dining space</h2>
            </ScrollReveal>
            
            <ScrollReveal>
              <h3 className="text-xl">Exciting News for Wedding Clients!</h3>
            </ScrollReveal>

            <Image 
              src="/assets/images/home/private-dining-host.jpg" 
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
            src="/assets/images/home/cocktail-garnish.png" 
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
          src="/assets/images/home/venue-details-collage.jpeg" 
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