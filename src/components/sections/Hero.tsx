import Image from 'next/image';

import MidNav from './MidNav';
import Welcome from './Welcome';

const Hero = () => {
  return (
    <div className="relative w-full z-20">
      <MidNav />

      {/* Hero Section */}
      <div className="h-screen w-full sticky top-0 z-20 bg-[#FAF8F5] overflow-hidden">
        {/* Full-bleed hero photo. Whenever the viewport is taller relative to
            its width than the photo itself, object-position alone can't crop
            enough vertical slack and the plain ceiling above the chandeliers
            peeks out at the top. We compensate by zooming in from the bottom
            edge, with the zoom amount keyed to viewport aspect ratio (see
            .hero-photo rules in globals.css) rather than a width breakpoint,
            since a narrow/short desktop window has the same problem as a
            phone. */}
        <Image
          src="/assets/images/hero/hero-main.webp"
          alt="Bride in a white gown beneath gold chandeliers, flanked by classical statues"
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[50%_65%] origin-bottom scale-150"
          style={{ willChange: 'transform' }}
        />
        {/* The hero is photo-only by design; the page's H1 stays in the markup
            for search engines and screen readers. */}
        <h1 className="sr-only">
          Weddings by Maison Fave: Intimate &amp; Destination Wedding Planner in Lagos, Nigeria
        </h1>
      </div>

      {/* Content that will scroll over the hero */}
      <div className="relative bg-white min-h-screen w-full z-20">
        <Welcome />
      </div>
    </div>
  );
};

export default Hero;
