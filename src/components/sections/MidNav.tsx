"use client";

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

const NavLinks = () => (
  <div className='w-full px-4 py-3 lg:px-12 flex flex-col items-center gap-3'>

    {/* Brand */}
    <Link href="/" className='flex items-center gap-2'>
      <Image className='w-8 h-8 lg:w-10 lg:h-10' src="/assets/images/brand/logo.png" width={100} height={100} alt="Logo" />
      <span className='text-sm lg:text-base tracking-[0.2em] uppercase text-black whitespace-nowrap'>WEDDINGS BY MAISON FAVE</span>
    </Link>

    {/* Menu */}
    <div className='flex w-full items-center justify-between text-lg lg:text-xl'>
      <Link href="/#aboutus" className='text-black hover:text-green-700'>About us</Link>
      <Link href="/portfolio" className='text-black hover:text-green-700'>Portfolio</Link>
      <Link href="/#testimonial" className='text-black hover:text-green-700'>Testimonial</Link>
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
