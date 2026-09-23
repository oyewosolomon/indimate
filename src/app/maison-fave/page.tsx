import type { Metadata } from 'next';

import SiteNav from '@/components/maison-fave/SiteNav';
import Hero from '@/components/maison-fave/Hero';
import WhatWeDo from '@/components/maison-fave/WhatWeDo';
import CreativeHouse from '@/components/maison-fave/CreativeHouse';
import OurBrands from '@/components/maison-fave/OurBrands';
import WorkWithUs from '@/components/maison-fave/WorkWithUs';
import SiteFooter from '@/components/maison-fave/SiteFooter';

const title = 'Maison Fave | A Creative House for Events, Spaces and Experiences';
const description =
  'Maison Fave is a multidisciplinary creative house curating events, transforming spaces and bringing ideas to life — from intimate gatherings to large-scale celebrations, destination events and productions.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: '/maison-fave',
  },
  openGraph: {
    type: 'website',
    url: '/maison-fave',
    siteName: 'Maison Fave',
    title,
    description,
    images: [
      {
        url: '/assets/images/portfolio/middle-east/sunset-violinists.jpeg',
        width: 1200,
        height: 630,
        alt: 'Maison Fave — a creative house',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function MaisonFavePage() {
  return (
    <div className="bg-[#F6F1E9]">
      <SiteNav />
      <main>
        <Hero />
        <WhatWeDo />
        <CreativeHouse />
        <OurBrands />
        <WorkWithUs />
      </main>
      <SiteFooter />
    </div>
  );
}
