import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { Italianno, Playfair_Display, Lato} from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import "./globals.css";

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
});


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair',
});


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const siteUrl = 'https://weddingsbymaisonfave.com';
const gtmId = 'GTM-PV8SB8PK';
const title = 'Weddings by Maison Fave | Destination & Intimate Wedding Planner in Lagos, Nigeria';
const description = 'Weddings by Maison Fave plans dreamy, ethereal destination and intimate weddings in Lagos, Nigeria. Full planning, decoration, and coordination for unconventional couples.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Weddings by Maison Fave',
  },
  description,
  keywords: [
    'wedding planner Lagos',
    'intimate wedding planner Nigeria',
    'destination wedding planner Lagos',
    'wedding decoration Lagos',
    'wedding coordination Nigeria',
    'small wedding planner Nigeria',
    'luxury wedding planner Lagos',
  ],
  authors: [{ name: 'Weddings by Maison Fave' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Weddings by Maison Fave',
    title,
    description,
    locale: 'en_NG',
    images: [
      {
        url: '/assets/images/brand/og-weddings.jpg',
        width: 1200,
        height: 630,
        alt: 'Bride walking down a floral beach wedding aisle styled by Weddings by Maison Fave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/images/brand/og-weddings.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'Weddings by Maison Fave',
  description,
  url: siteUrl,
  telephone: '+2348166734100',
  email: 'bookings@weddingsbymaisonfave.com',
  image: `${siteUrl}/assets/images/brand/og-weddings.jpg`,
  logo: `${siteUrl}/assets/images/brand/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  areaServed: 'NG',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '13:00',
      closes: '18:00',
    },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Full Wedding Planning',
        description: 'End-to-end destination and intimate wedding planning, from mood board to vendor selection.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Full Decoration Service',
        description: 'Ethereal, personalized wedding decor tailored to each couple’s vision.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Full Coordinating Services',
        description: 'Day-of and full wedding coordination for a seamless celebration.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${italianno.variable} ${playfair.variable} ${lato.variable}`}>
      <GoogleTagManager gtmId={gtmId} />
      <body className={playfair.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}