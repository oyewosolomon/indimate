"use client"

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { serviceData, processData, type Service } from "@/lib/data/services";

// Animate components when they come into view
const AnimateOnScroll = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


const ServiceCard = ({ title, backgroundImage, featureImage, content }: Service) => {
  // Content is revealed in a tap-to-open popup on every screen size, so we
  // lock background scroll whenever it's open, regardless of device.
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const openCard = () => setIsOpen(true);
  const closeCard = () => setIsOpen(false);

  const renderedContent = content.map((item, index) => {
    if (item.type === "p") {
      return <p key={index}>{item.text}</p>;
    }
    if (item.type === "strong") {
      return <strong key={index}>{item.text}</strong>;
    }
    return null;
  });

  return (
    <AnimateOnScroll>
      <div
        className="group relative h-[12rem] md:h-[30rem] border-[1px] border-white rounded-xl overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={openCard}
      >
        {/* Closed state: always visible, tap/click opens the popup with the full content */}
        <div className="absolute inset-0 flex flex-col text-center items-center justify-center text-white p-3 md:p-6 bg-black/40 transition-colors duration-300 group-hover:bg-black/50">
          <h3 className="text-md md:text-3xl font-semibold mb-2">{title}</h3>
          <span className="text-[11px] md:text-md font-semibold tracking-wider opacity-80 text-[#D4A300]">TAP TO READ</span>
        </div>
      </div>

      {/* Popup opened by tapping/clicking the card, on every screen size. A separate
          backdrop layer (rather than margin-on-the-card) makes "tap outside
          to close" reach an element that's actually there to receive it. */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeCard}
        >
          <div
            className="w-full max-w-2xl md:max-w-3xl h-[70vh] bg-white rounded-lg flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{title}</h3>
              <button
                onClick={closeCard}
                className="text-gray-600 hover:text-gray-900 text-xl md:text-2xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="flex-1 text-gray-900 overflow-y-auto">
              <div className="h-full flex flex-col justify-start space-y-4 text-left">
                <div className="p-6 md:p-8 text-base md:text-lg leading-relaxed">{renderedContent}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimateOnScroll>
  );
};

const Services = () => {
  return (
    <div id="aboutus"
      className="min-h-screen z-20 relative text-white bg-black py-16 px-4 md:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/hero/about-section-background.png')`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <p className="leading-[2rem] md:leading-[3rem] text-3xl md:text-4xl mb-8">
          With words like
          <span className="font-normal tracking-widest"> RARE, ETHEREAL, DELICATE AND EFFORTLESS</span>,
          we capture the essence of your dream wedding and bring it to life.
        </p>
        <p className="leading-[2rem] md:leading-[3rem] text-xl md:text-2xl opacity-90">
          We&apos;ll take you on a journey to a destination wedding no matter where you are and pay attention to every detail, culture and aesthetic to elevate your wedding experience to new heights. Trust us to create a one-of-a-kind mood board that will make your intimate wedding unforgettable.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-5xl text-center mb-12">Our Services</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20">
        <AnimateOnScroll>
          <h2 className="text-5xl text-center mb-12">Our Process</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {processData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
