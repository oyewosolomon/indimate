"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

import { portfolioCategories } from '@/lib/data/portfolio';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const PortfolioCategoryGrid = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12 flex flex-col gap-6 pb-16">
      {portfolioCategories.map((category) => (
        <motion.div
          key={category.slug}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <Link
            href={`/portfolio/${category.slug}`}
            className="group relative block aspect-[16/9] w-full overflow-hidden rounded-lg"
          >
            <Image
              src={category.coverImage}
              alt={category.coverAlt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl tracking-wide text-white uppercase">
                {category.label}
              </h3>
              <span className="mt-1 inline-block text-xs md:text-sm tracking-widest text-white/90 uppercase">
                View weddings &rarr;
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioCategoryGrid;
