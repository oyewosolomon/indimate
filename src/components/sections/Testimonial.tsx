"use client"

import { motion, type Variants } from "framer-motion";

import { testimonials } from "@/lib/data/testimonials";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-[#FAF8F5] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Love From Our Couples</h2>
        <p className="text-gray-600 text-lg">
          A few words from the couples we&apos;ve had the honor of celebrating with.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative pt-8"
          >
            {/* Card peeking out of the envelope */}
            <div
              className="absolute left-1/2 top-0 z-10 flex h-14 w-40 -translate-x-1/2 -translate-y-8 items-start justify-center rounded-[2px] bg-white pt-1 shadow-md"
              style={{ transform: `translateX(-50%) translateY(-2rem) rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
            >
              <span className="font-serif text-xl leading-none text-[#0A341F]/25">&ldquo;</span>
            </div>

            {/* Envelope pouch */}
            <div
              className="relative overflow-hidden rounded-sm shadow-[0_18px_30px_-12px_rgba(0,0,0,0.25)]"
              style={{ background: "linear-gradient(180deg, #F8F2E7 0%, #EFE4D2 100%)" }}
            >
              {/* Top flap */}
              <div
                className="absolute inset-x-0 top-0 h-20"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                  background: "linear-gradient(160deg, rgba(0,0,0,0.09), rgba(0,0,0,0) 65%)",
                }}
              />
              {/* Left flap shading */}
              <div
                className="absolute inset-y-0 left-0 w-1/2"
                style={{
                  clipPath: "polygon(0% 0%, 100% 80px, 0% 100%)",
                  background: "linear-gradient(100deg, rgba(0,0,0,0.05), rgba(0,0,0,0) 70%)",
                }}
              />
              {/* Right flap shading */}
              <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                  clipPath: "polygon(100% 0%, 0% 80px, 100% 100%)",
                  background: "linear-gradient(260deg, rgba(0,0,0,0.05), rgba(0,0,0,0) 70%)",
                }}
              />

              {/* Wax seal */}
              <div
                className="absolute left-1/2 top-16 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
                style={{ background: "radial-gradient(circle at 35% 30%, #EAD08A, #B8912F 75%)" }}
              />

              {/* Content */}
              <div className="relative flex flex-col px-7 pb-8 pt-24">
                <p className="mb-6 text-gray-700 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                  {testimonial.isPlaceholder && (
                    <span className="inline-block mt-2 rounded-full bg-[#0A341F]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0A341F]">
                      Sample testimonial
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
