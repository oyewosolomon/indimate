"use client"

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';

const currentYear = new Date().getFullYear();

const Contacts = () => {
  // Create refs for each animated section
  const contactRef = useRef(null);
  const hoursRef = useRef(null);

  // Trigger animations when each section scrolls into view
  const isContactInView = useInView(contactRef, { once: true });
  const isHoursInView = useInView(hoursRef, { once: true });

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full min-h-screen h-auto">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/contact/section-background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-4xl mb-24">
          {/* Contact Us */}
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={isContactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border border-white rounded-md p-10 text-center text-white backdrop-blur-sm"
          >
            <h3 className="text-5xl mb-3">Contact us</h3>
            <p className="mb-1">bookings@weddingsbymaisonfave.com</p>
            <p>+234 8166734100</p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            ref={hoursRef}
            initial="hidden"
            animate={isHoursInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border border-white rounded-md p-10 text-center text-white backdrop-blur-sm"
          >
            <h3 className="text-5xl mb-3">Working hours</h3>
            <p>Monday - Friday: 8:00am - 6pm</p>
            <p>Saturday - Sunday: 1:00pm - 6pm</p>
          </motion.div>
        </div>

        {/* Footer credit — points at the parent creative house. */}
        <Link
          href="/maison-fave"
          className="text-[10px] lg:text-xs tracking-[0.18em] uppercase text-white/70 hover:text-white whitespace-nowrap"
        >
          &copy; {currentYear} Maison Fave
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
