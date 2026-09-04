"use client";

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const NavLinks = () => (
  <div className='grid grid-cols-3 items-center gap-4 px-4 py-2 w-full lg:px-12 lg:gap-10'>

    {/* Left Links */}
    <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center lg:justify-start'>
      <a href="#aboutus" className='text-black hover:text-green-700'>About us</a>
      <a href="#portfolio" className='text-black hover:text-green-700'>Portfolio</a>
    </div>

    {/* Logo */}
    <div className='flex justify-center'>
      <Image className='w-20 h-20 lg:w-28 lg:h-28' src="/assets/images/logo.png" width={100} height={100} alt="Logo" />
    </div>

    {/* Right Links */}
    <div className='flex flex-col md:flex-row  gap-2 md:gap-4  justify-end lg:justify-end'>
      <a href="#testimonial" className='text-black hover:text-green-700'>Testimonial</a>
      <a href="#" className='text-black hover:text-green-700'>Blog</a>
    </div>

  </div>
);

const MidNav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [navHeight, setNavHeight] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollingDown = currentY > lastScrollY.current;

      setIsPastHero(currentY > heroHeight);
      setHidden(scrollingDown && currentY > heroHeight);

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isPastHero) {
    return (
      <div ref={navRef} className='w-full'>
        <NavLinks />
      </div>
    );
  }

  // Once past the hero, the nav is rendered fixed via a portal to <body> so it
  // isn't trapped inside Hero's own stacking context (later sections share the
  // same z-index and would otherwise paint over it while still nested there).
  return (
    <>
      <div style={{ height: navHeight }} aria-hidden="true" />
      {createPortal(
        <div
          className={`fixed top-0 left-0 w-full z-40 bg-white shadow-md transition-transform duration-300 ${
            hidden ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <NavLinks />
        </div>,
        document.body
      )}
    </>
  );
}

export default MidNav;
