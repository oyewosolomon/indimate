import React from 'react';
import Image from 'next/image';

const Contacts = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
  {/* Background Image */}
  <Image
    src="/assets/images/bg-img.png"
    alt="Background"
    layout="fill"
    objectFit="cover"
    className="absolute inset-0 opacity-70"
  />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-white px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Us */}
          <div className="border border-white rounded-md p-8 text-center backdrop-blur-sm">
            <h1 className="text-6xl mb-3">Contact us</h1>
            <p className="mb-1">Glamorousspacesbyfave@gmail.com</p>
            <p>+234 8166734100</p>
          </div>

          {/* Working Hours */}
          <div className="border border-white rounded-md p-8 text-center backdrop-blur-sm">
            <h1 className="text-6xl mb-3">Working hours</h1>
            <p>Monday - Friday: 8:00am - 6pm</p>
            <p>Saturday - Sunday: 1:00pm - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;