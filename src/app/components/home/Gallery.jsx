import React from 'react';
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className="w-full py-16 bg-white text-black">
      {/* Header Section */}
      <h1 className="text-7xl text-center mb-12">
        Cozy gatherings, unforgettable memories.
      </h1>
      
      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-16">
        
          
      <div className="relative overflow-hidden rounded-lg">
        <Image 
          src="/assets/images/Group_7685.png" 
          alt="Wedding couple" 
          className="object-cover w-full h-full"
          layout="responsive"
          width={100}
          height={160}
        />
      </div>
       
      </div>

      {/* Private Dining Section */}
      <div className='max-w-7xl bg-white text-black mx-auto px-4 py-8'>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl">Our private dinning space</h1>
            <h3 className="text-2xl">Exciting News for Wedding Clients!</h3>
            <p className="text-gray-700 text-2xl">
              We&apos;re thrilled to announce a special offer for our private dining space! When you book us to plan your wedding, you can now enjoy exclusive discounts on our intimate venue for all your pre-wedding celebrations, such as bridal showers, engagement parties, and pre-wedding photoshoots.
            </p>
            <p className="text-gray-700 text-2xl">
              Transform your special moments into unforgettable experiences in our beautifully designed space, perfect for small gatherings. This limited-time offer makes it easier than ever to celebrate your journey to &quot;I do.&quot; Contact us to learn more and secure your date!
            </p>
          </div>
          <div className="relative overflow-hidden">
            <Image 
              src="/assets/images/image_6.png" 
              alt="Cocktail preparation" 
              className="object-cover w-full h-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;