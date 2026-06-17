"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-32 px-6 bg-[#f5f5f5]">
      <div
        ref={ref}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8"
      >
        {/* Urgency pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-full px-4 py-2 text-sm font-medium text-[#111111] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            2 slots remaining this month
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-1"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
            Your competitors already have a site.
          </h2>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#c0c0c0] leading-tight">
            Do it better.
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#374151] text-base sm:text-lg max-w-xl leading-relaxed"
        >
          Get a professionally built, SEO-optimized website — no templates, no fluff.
          Just results that grow your business.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#111111] text-white font-semibold text-base px-10 py-4 rounded-xl hover:bg-black transition-colors duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          >
            Get Started →
          </a>
          <p className="text-sm text-[#9ca3af]">
            No commitment until you approve the design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
