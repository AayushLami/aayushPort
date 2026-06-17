"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const bullets = [
  "Works with businesses nationwide",
  "You work directly with me — no middlemen",
  "Fast turnaround, real deadlines",
  "Built for conversions, not just aesthetics",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="min-h-screen px-6 bg-white border-y border-[#e5e5e5] flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-[1100px] mx-auto text-center flex flex-col items-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-[#6b7280] tracking-[0.2em] uppercase mb-[24px]"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-[#111111] mb-[80px]"
        >
          Aayush Lamichhane
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center w-full"
        >
          {/* Left — Text */}
          <div className="flex flex-col items-center text-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#374151] leading-relaxed text-base"
            >
              I work with businesses across the USA to build websites that don&apos;t
              just look good — they generate leads, increase sales, and grow revenue.
              Whether you&apos;re a local shop or an online brand, I build the foundation
              that turns your site into your best salesperson.
            </motion.p>

            {/* Bullet list */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-3 w-full"
            >
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 justify-center">
                  <CheckCircle2 size={16} className="text-[#111111] shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-[#374151]">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] border-b-2 border-[#111111] pb-0.5 hover:border-[#374151] hover:text-[#374151] transition-all"
              >
                Work with me →
              </a>
            </motion.div>
          </div>

          {/* Right — Personal Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5 w-full"
          >
            {/* Profile Card */}
            <div className="bg-white border border-[#e5e5e5] rounded-xl p-[48px] flex flex-col items-center text-center gap-6">
              {/* Avatar + name */}
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                <div className="w-16 h-16 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                  <span className="font-heading text-xl font-bold text-white">AL</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-heading text-xl font-bold text-[#111111] text-center sm:text-left">
                    Aayush Lamichhane
                  </h3>
                  <p className="text-sm text-[#6b7280] mt-0.5 text-center sm:text-left">Founder, Rankly</p>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-1.5">
                    <MapPin size={12} className="text-[#9ca3af]" />
                    <span className="text-xs text-[#9ca3af]">NJ · Est. 2026</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#e5e5e5]" />

              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                  { value: "10+", label: "Sites Built" },
                  { value: "95+", label: "PageSpeed" },
                  { value: "USA", label: "Nationwide" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center bg-white border border-[#e5e5e5] rounded-lg py-4 px-2"
                  >
                    <span className="font-heading text-xl font-bold text-[#111111]">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-[#9ca3af] uppercase tracking-wide mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-[#111111] rounded-xl p-[48px] flex flex-col items-center text-center">
              <p className="text-sm text-[#d1d5db] leading-relaxed italic text-center">
                &ldquo;Every site I build is fast, technically sound, and structured
                for search from the ground up. No fluff, no filler — just results.&rdquo;
              </p>
              <p className="text-xs text-[#6b7280] mt-3 text-center">— Aayush Lamichhane</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
