import Image from 'next/image';

export default function Venue() {
  return (
    <div className="relative h-screen  bg-black/60 w-full">
      <Image 
        src="/assets/images/image_5.png" 
        alt="Venue Background" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        className="absolute inset-0 -z-10"
      />

      {/* Overlay Text */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-3xl md:text-6xl mb-16">Venue Capacity</h1>
        
        <div className="flex items-center space-x-28">
          <div>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">50 people</h1>
            <p className="text-md md:text-lg">Theatre Settings</p>
          </div>

          {/* Divider */}
          <div className="w-[4px] h-40 bg-white"></div>

          <div>
            <h1 className="text-4xl md:text-6xl mb-8 font-light">20-40 Guest</h1>
            <p className="text-md md:text-lg">Table setting style</p>
          </div>
        </div>
      </div>
    </div>
  );
}
