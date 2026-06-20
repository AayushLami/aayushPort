"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Works with businesses nationwide",
  "You work directly with me — no middlemen",
  "Fast turnaround, real deadlines",
  "Built for conversions, not just aesthetics",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const triggerContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="about"
      className="section min-h-screen px-6 bg-white flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-[1100px] mx-auto text-center flex flex-col items-center">
        {/* Section eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-eyebrow text-[12px] tracking-[0.12em] text-[#999999] font-medium uppercase"
        >
          About
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title font-heading font-extrabold text-[#111111] tracking-[-0.03em]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Aayush Lamichhane
        </motion.h2>

        {/* Full-width Centered Text Block */}
        <div ref={ref} className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#444444] leading-[1.7] text-base md:text-lg text-center"
          >
            I work with businesses across the USA to build websites that don&apos;t
            just look good — they generate leads, increase sales, and grow revenue.
            Whether you&apos;re a local shop or an online brand, I build the foundation
            that turns your site into your best salesperson.
          </motion.p>

          {/* Centered Bullet list */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-3 w-full"
          >
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 justify-center">
                <CheckCircle2 size={16} className="text-[#111111] shrink-0 animate-pulse" strokeWidth={2.5} />
                <span className="text-sm font-medium text-[#444444] leading-[1.7]">{b}</span>
              </li>
            ))}
          </motion.ul>

          {/* Text link CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-2"
          >
            <a
              href="#contact"
              onClick={triggerContactModal}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] border-b border-[#111111] pb-0.5 hover:opacity-80 transition-all cursor-pointer"
            >
              Work with me &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
