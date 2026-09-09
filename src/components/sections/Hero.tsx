import Image from 'next/image';

import MidNav from './MidNav';
import Welcome from './Welcome';

const Hero = () => {
  return (
    <div className="relative w-full z-20">
      <MidNav />

      {/* Hero Section */}
      <div className="h-screen w-full sticky top-0 z-20 bg-[#FAF8F5] overflow-hidden">
        {/* Full-bleed hero photo, cropped in on very wide screens. On mobile the
            container is much taller relative to the image than object-position
            can crop for (cover ends up scaling to fill width with no vertical
            slack), so we scale the image vertically from the bottom edge to
            push the flowers/ceiling at the top out of view. */}
        <Image
          src="/assets/images/hero/hero-main.jpeg"
          alt="Bride in a white gown beneath gold chandeliers, flanked by classical statues"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_65%] origin-bottom scale-150 md:scale-100"
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
        <Welcome />
      </div>
    </div>
  );
};

export default Hero;
