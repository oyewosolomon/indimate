import Image from 'next/image';

export default function Venue() {
  return (
    <div className="relative h-screen  bg-black/60 w-full">
      <Image 
        src="/assets/images/image_2.png" 
        alt="Venue Background" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        className="absolute inset-0 -z-10"
      />

      {/* Overlay Text */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Venue Capacity</h2>
        
        <div className="flex items-center space-x-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-light">50 people</h3>
            <p className="text-sm md:text-base">Theatre Settings</p>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-white"></div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light">20-40 Guest</h3>
            <p className="text-sm md:text-base">Table setting style</p>
          </div>
        </div>
      </div>
    </div>
  );
}
