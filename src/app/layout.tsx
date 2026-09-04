// layout.js
import { Italianno, Playfair_Display, Lato} from 'next/font/google';

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
});


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const siteUrl = 'https://intimateweddingsbyfave.com';
const title = 'Intimate Weddings By Fave | Destination & Intimate Wedding Planner in Lagos, Nigeria';
const description = 'Intimate Weddings By Fave plans dreamy, ethereal destination and intimate weddings in Lagos, Nigeria. Full planning, decoration, and coordination for unconventional couples.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Intimate Weddings By Fave',
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
  authors: [{ name: 'Intimate Weddings By Fave' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Intimate Weddings By Fave',
    title,
    description,
    locale: 'en_NG',
    images: [
      {
        url: '/assets/images/image_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Intimate Weddings By Fave — destination wedding decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/images/image_2.jpg'],
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
  name: 'Intimate Weddings By Fave',
  description,
  url: siteUrl,
  telephone: '+2348166734100',
  email: 'bookings@intimateweddingsbyfave.com',
  image: `${siteUrl}/assets/images/logo.png`,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${italianno.variable} ${playfair.variable} ${lato.variable}`}>
      <body className={playfair.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}