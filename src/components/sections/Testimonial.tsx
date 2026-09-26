"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { coupleStories } from "@/lib/data/stories";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonial = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const openStory = coupleStories.find((story) => story.id === openId) ?? null;

  // Mobile carousel: track the centred envelope for the dots, and nudge the
  // row once when it scrolls into view so it reads as swipeable.
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInView = useInView(scrollerRef, { once: true, amount: 0.6 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSwiped, setHasSwiped] = useState(false);
  const nudgingRef = useRef(false);

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    const cards = Array.from(scroller.children) as HTMLElement[];
    const nearest = cards.reduce(
      (best, card, i) => {
        const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        return distance < best.distance ? { i, distance } : best;
      },
      { i: 0, distance: Infinity },
    );
    setActiveIndex(nearest.i);
    if (!nudgingRef.current && scroller.scrollLeft > 40) setHasSwiped(true);
  };

  const scrollToStory = (index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !card) return;
    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scrollerInView || !scroller) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile || reducedMotion || scroller.scrollLeft > 0) return;

    // Snap would pull a small programmatic scroll straight back, so pause it for the nudge.
    const out = window.setTimeout(() => {
      nudgingRef.current = true;
      scroller.style.scrollSnapType = "none";
      scroller.scrollBy({ left: 90, behavior: "smooth" });
    }, 400);
    const back = window.setTimeout(() => scroller.scrollTo({ left: 0, behavior: "smooth" }), 1100);
    const restore = window.setTimeout(() => {
      scroller.style.scrollSnapType = "";
      nudgingRef.current = false;
    }, 1800);
    return () => {
      window.clearTimeout(out);
      window.clearTimeout(back);
      window.clearTimeout(restore);
      scroller.style.scrollSnapType = "";
      nudgingRef.current = false;
    };
  }, [scrollerInView]);

  useEffect(() => {
    if (!openId) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  return (
    <div id="testimonial" className="bg-[#FAF8F5] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Love From Our Couples</h2>
        <p className="text-gray-600 text-lg">
          A few words from the couples we&apos;ve had the honor of celebrating with.
        </p>
      </div>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-3 sm:gap-10 sm:overflow-visible sm:px-0 sm:py-0"
      >
        {coupleStories.map((story, index) => (
          <motion.button
            key={story.id}
            type="button"
            onClick={() => setOpenId(story.id)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            className="group flex w-[78vw] shrink-0 snap-center flex-col items-center text-center sm:w-auto"
          >
            <motion.div
              layoutId={`envelope-${story.id}`}
              className="relative aspect-square w-full max-w-[340px] drop-shadow-[0_14px_22px_rgba(0,0,0,0.28)] transition-[filter] duration-300 group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.38)]"
              style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
            >
              <Image
                src="/assets/images/stories/stories-bg.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 80vw, 340px"
                className="object-contain"
              />
            </motion.div>
            <p className="mt-5 font-semibold tracking-wide text-gray-900">
              {story.names}
            </p>
            <span className="mt-1 text-xs uppercase tracking-widest text-[#0A341F]/60">
              Read their story
            </span>
          </motion.button>
        ))}
      </div>

      {/* Swipe indicator: mobile only, where the envelopes sit in a horizontal row */}
      <div className="mt-4 flex flex-col items-center gap-3 sm:hidden">
        <div className="flex items-center gap-2">
          {coupleStories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              onClick={() => scrollToStory(index)}
              aria-label={`Show ${story.names}`}
              aria-current={index === activeIndex}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-[#708238]" : "w-2 bg-[#708238]/30"
              }`}
            />
          ))}
        </div>
        <p
          aria-hidden={hasSwiped}
          className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-gray-500 transition-opacity duration-500 ${
            hasSwiped ? "opacity-0" : "opacity-100"
          }`}
        >
          <ChevronLeft className="h-3.5 w-3.5 animate-pulse" />
          Swipe to read more
          <ChevronRight className="h-3.5 w-3.5 animate-pulse" />
        </p>
      </div>

      <AnimatePresence>
        {openStory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              layoutId={`envelope-${openStory.id}`}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-[#FAF8F5] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Close story"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-gray-700 shadow hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative h-40 w-full shrink-0 sm:h-52">
                <Image
                  src="/assets/images/stories/stories-bg.webp"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
              </div>

              <div className="overflow-y-auto px-6 pb-8 pt-2 sm:px-10">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="mb-6 text-center text-3xl text-gray-900"
                >
                  {openStory.names}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="space-y-4"
                >
                  {openStory.quote.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {openStory.images.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
                  >
                    {openStory.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[3/4] overflow-hidden rounded-md"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
