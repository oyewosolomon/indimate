import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import MidNav from '@/components/sections/MidNav';
import Contacts from '@/components/sections/Contacts';
import { getPortfolioCategory, portfolioCategories } from '@/lib/data/portfolio';

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata(
  props: PageProps<'/portfolio/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getPortfolioCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.label} Weddings`,
    description: category.description,
    alternates: {
      canonical: `/portfolio/${category.slug}`,
    },
  };
}

export default async function PortfolioCategoryPage(
  props: PageProps<'/portfolio/[slug]'>
) {
  const { slug } = await props.params;
  const category = getPortfolioCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-white">
      <MidNav />

      <div className="relative h-[50vh] min-h-[360px] w-full">
        <Image
          src={category.coverImage}
          alt={category.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <Link href="/portfolio" className="mb-4 text-sm tracking-widest uppercase text-white/80 hover:text-white">
            &larr; Back to the portfolio
          </Link>
          <h1 className="text-4xl md:text-6xl uppercase tracking-wide">{category.label}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-lg text-gray-600">{category.description}</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {category.images.map((image) => (
          <div key={image.src} className="mb-4 break-inside-avoid overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>

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
