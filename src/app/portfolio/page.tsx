import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import MidNav from '@/components/sections/MidNav';
import Contacts from '@/components/sections/Contacts';
import PortfolioCategoryGrid from '@/components/sections/PortfolioCategoryGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse real weddings planned and designed by Intimate Weddings By Fave — from Lagos gardens to European estates, desert celebrations and traditional ceremonies.',
  alternates: {
    canonical: '/portfolio',
  },
};

const stripImages = [
  { src: '/assets/images/portfolio/africa/confetti-skyline.jpeg', alt: 'Bride and groom laughing under a shower of confetti beneath a chandelier' },
  { src: '/assets/images/portfolio/traditional-weddings/royal-attire-portrait.jpeg', alt: 'Couple walking hand in hand across the lawn of a grand French chateau' },
  { src: '/assets/images/portfolio/middle-east/parasol-desert-arch.jpeg', alt: 'Bride’s cathedral veil billowing in the desert wind beside her groom' },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      <MidNav />

      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl text-gray-800">
          Curated for the
          <br />
          <span>Unconventional Couple</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          With words like rare, ethereal, delicate and effortless, we create iconic weddings
          and celebrations, thoughtfully designed across countries and cultures.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-3">
        {stripImages.map((image) => (
          <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
            <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center pb-8">
        <h2 className="text-2xl md:text-3xl tracking-[0.3em] text-gray-800 uppercase">
          The Portfolio
        </h2>
      </div>

      <PortfolioCategoryGrid />

      <div className="py-20 text-center bg-[#FAF8F5]">
        <Link
          href="/#plan-your-wedding"
          className="inline-block border border-[#0A341F] text-[#0A341F] text-sm md:text-base tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#0A341F] hover:text-white transition-colors"
        >
          Plan your wedding
        </Link>
      </div>

      <Contacts />
    </div>
  );
}
