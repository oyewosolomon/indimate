import Image from 'next/image';

import MidNav from './MidNav';
import Welcome from './Welcome';

const Hero = () => {
  return (
    <div className="relative w-full z-20">
      {/* Hero Section */}
      <div className="h-screen w-full sticky top-0 z-20 bg-[#FAF8F5]">
        {/* Full, uncropped hero photo — letterboxed so nothing is cut off */}
        <Image
          src="/assets/images/hero/hero-main.jpeg"
          alt="Bride in a white gown beneath gold chandeliers, flanked by classical statues"
          fill
          priority
          sizes="100vw"
          className="object-contain"
          style={{ willChange: 'transform' }}
        />
        {/* Centered Text */}
        {/* <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white/80 tracking-widest text-3xl md:text-6xl font-bold text-center [text-shadow:0_2px_16px_rgb(0_0_0_/_55%)]">
            Intimate &amp; Destination Wedding Planner in Lagos, Nigeria
          </h1>
        </div> */}
      </div>

      {/* Content that will scroll over the hero */}
      <div className="relative bg-white min-h-screen w-full z-20">
        <MidNav />
        <Welcome />
      </div>
    </div>
  );
};

export default Hero;
