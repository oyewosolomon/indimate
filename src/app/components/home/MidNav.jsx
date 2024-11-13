import React from 'react';
import Image from 'next/image';

const MidNav = () => {
  return (
    <div className='w-11/12 z-20'>
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
    </div>
  );
}

export default MidNav;
