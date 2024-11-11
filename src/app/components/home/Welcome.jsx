import Image from 'next/image';
import React from 'react'

const Welcome = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-gray-800">
        {/* Hero Text Section */}
        <div className="text-center mb-16 space-y-6 bg-white text-gray-800">
          <h1 className="text-4xl md:text-7xl font-medium text-gray-800 ">
            Dreamy, Ethereal, Curated for the
            <br />
            Unconventional Couple
          </h1>
          <p className="text-xl text-gray-600 font-inter">
            We are so happy to have you here, and you&apos;ve come to the right place.
          </p>
        </div>
  
        {/* Image Gallery */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8">
          {/* First Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/images/image_3.png"
              alt="Beachside wedding arch with flowers"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
  
          {/* Second Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/assets/images/image_1.png"
              alt="Bride against white backdrop"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Third Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/assets/images/image_4.png"
              alt="Couple under floral arch"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  

export default Welcome