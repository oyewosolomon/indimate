import React from 'react';
import Image from 'next/image'

const Gallery = () => {
  return (
    <div className="w-full py-16 bg-white text-black">
      {/* Header Section */}
      <h1 className="text-4xl italic text-center mb-12 font-serif">
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
            <h2 className="text-3xl italic font-serif">Our private dinning space</h2>
            <h3 className="text-xl font-semibold">Exciting News for Wedding Clients!</h3>
            <p className="text-gray-700">
              We&apos;re thrilled to announce a special offer for our private dining space! When you book us to plan your wedding, you can now enjoy exclusive discounts on our intimate venue for all your pre-wedding celebrations, such as bridal showers, engagement parties, and pre-wedding photoshoots.
            </p>
            <p className="text-gray-700">
              Transform your special moments into unforgettable experiences in our beautifully designed space, perfect for small gatherings. This limited-time offer makes it easier than ever to celebrate your journey to &quot;I do.&quot; Contact us to learn more and secure your date!
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image 
              src="/assets/images/image_6.png" 
              alt="Cocktail preparation" 
              className="object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;