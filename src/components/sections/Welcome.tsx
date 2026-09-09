import Link from 'next/link';
import Image from 'next/image';

import PortfolioCategoryGrid from './PortfolioCategoryGrid';

const stripImages = [
  { src: '/assets/images/portfolio/africa/confetti-skyline.jpeg', alt: 'Bride and groom laughing under a shower of confetti beneath a chandelier' },
  { src: '/assets/images/portfolio/traditional-weddings/royal-attire-portrait.jpeg', alt: 'Couple walking hand in hand across the lawn of a grand French chateau' },
  { src: '/assets/images/portfolio/middle-east/parasol-desert-arch.jpeg', alt: 'Bride’s cathedral veil billowing in the desert wind beside her groom' },
];

const Welcome = () => {
  return (
    <div className="max-w-8xl mx-auto bg-white text-gray-800">
      {/* Hero Text Section */}
      <div className="bg-[#FAF8F5] px-4 py-16 text-center space-y-6">
        <h2 className="text-4xl leading-10 md:text-7xl font-medium text-gray-800">
          Dreamy, Ethereal, Curated for the
          <br />
          Unconventional Couple
        </h2>
        <p className="text-xl text-gray-600">
        Iconic weddings and celebrations thoughtfully designed across countries and cultures.
        </p>
      </div>


      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3">
        {stripImages.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
            <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center py-8">
        <h2 className="text-2xl md:text-3xl tracking-[0.3em] text-gray-800 uppercase">
          The Portfolio
        </h2>
      </div>

      <PortfolioCategoryGrid />

      <div className="mt-8 pb-16 text-center">
        <Link
          href="/portfolio"
          className="inline-block border border-[#0A341F] text-[#0A341F] text-sm tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#0A341F] hover:text-white transition-colors"
        >
          View the full portfolio
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
