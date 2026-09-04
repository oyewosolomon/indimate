"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { galleryTiles, weddingStories, type WeddingStory } from '@/lib/data/wedding-stories';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

interface GalleryCardProps {
  src: string;
  alt: string;
  title: string;
  onClick: () => void;
}

const GalleryCard = ({ src, alt, title, onClick }: GalleryCardProps) => (
  <motion.button
    type="button"
    onClick={onClick}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={cardVariants}
    className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl text-left"
  >
    <Image
      src={src}
      alt={alt}
      width={500}
      height={650}
      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="p-4 text-sm font-medium tracking-wide text-white">
        {title}
        <span className="block text-xs font-normal text-white/80">View their story &rarr;</span>
      </span>
    </div>
  </motion.button>
);

const StoryModal = ({ story, onClose }: { story: WeddingStory | null; onClose: () => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Dialog open={!!story} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        {story && (
          <>
            <DialogTitle className="text-2xl md:text-3xl">{story.title}</DialogTitle>
            {story.isPlaceholder && (
              <span className="w-fit rounded-full bg-[#0A341F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A341F]">
                Sample story &mdash; personalize me
              </span>
            )}

            <div className="mt-2 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={story.images[activeIndex]}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              {story.images.length > 1 && (
                <div className="flex gap-2">
                  {story.images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md ring-2 transition ${
                        i === activeIndex ? 'ring-[#0A341F]' : 'ring-transparent'
                      }`}
                      aria-label={`Show photo ${i + 1}`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <p className="leading-relaxed text-gray-700">{story.story}</p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const Welcome = () => {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const selectedStory = weddingStories.find((s) => s.id === selectedStoryId) ?? null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white text-gray-800">
      {/* Hero Text Section */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl leading-10 md:text-7xl font-medium text-gray-800">
          Dreamy, Ethereal, Curated for the
          <br />
          Unconventional Couple
        </h2>
        <p className="text-xl text-gray-600">
          We are so happy to have you here, and you&apos;ve come to the right place.
        </p>
      </div>

      {/* Wedding story gallery */}
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {galleryTiles.map((tile, index) => {
          const story = weddingStories.find((s) => s.id === tile.storyId);
          return (
            <GalleryCard
              key={`${tile.storyId}-${index}`}
              src={tile.src}
              alt={tile.alt}
              title={story?.title ?? ''}
              onClick={() => setSelectedStoryId(tile.storyId)}
            />
          );
        })}
      </div>

      <StoryModal key={selectedStory?.id ?? 'none'} story={selectedStory} onClose={() => setSelectedStoryId(null)} />
    </div>
  );
};

export default Welcome;
