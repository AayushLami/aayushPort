"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEADLINE = "Your website should work as hard as you do.";
const CHAR_INTERVAL = 60;

const stats = [
  { value: "10+", label: "Sites Built" },
  { value: "95+", label: "Google PageSpeed" },
  { value: "#1", label: "First Page Rankings" },
];

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setDisplayed(HEADLINE);
      setTypingDone(true);
      return;
    }

    const interval = setInterval(() => {
      i++;
      setDisplayed(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, CHAR_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const triggerContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f5f5f5]"
      aria-label="Hero"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center flex flex-col items-center gap-8 pt-[140px] pb-[80px]">
        {/* Pulsing red dot pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e0e0e0]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-[11px] font-semibold text-[#555555] tracking-wider uppercase">
            2 slots open this month
          </span>
        </motion.div>

        {/* Typewriter headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-[1.1] tracking-tight min-h-[3.3em] sm:min-h-[2.2em] md:min-h-[2.2em] max-w-4xl">
          {displayed}
          <span
            className="inline-block w-[3px] h-[0.85em] bg-[#111111] ml-1 align-middle"
            style={{
              animation: typingDone ? "blink 1s step-end infinite" : "none",
            }}
          />
        </h1>

        {/* Sub-headline */}
        <AnimatePresence>
          {typingDone && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[20px] text-[#666666] max-w-[520px] mx-auto leading-relaxed"
            >
              I build fast, SEO-optimized websites that rank on Google and turn
              visitors into customers. <span className="text-gray-400">No templates. No fluff.</span>
            </motion.p>
          )}
        </AnimatePresence>

        {/* CTA Buttons */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={triggerContactModal}
                className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm tracking-tight text-white bg-black hover:bg-neutral-800 transition-colors px-[24px] py-[14px] rounded-[8px] cursor-pointer"
              >
                Get Started &rarr;
              </button>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-sm tracking-tight text-black bg-white border border-[#e0e0e0] hover:bg-gray-50 transition-colors px-[24px] py-[14px] rounded-[8px]"
              >
                See Pricing
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inline tags below buttons */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[13px] text-[#888888] font-medium flex items-center justify-center gap-2"
            >
              <span>Fast Delivery</span>
              <span className="text-gray-300 font-bold">&middot;</span>
              <span>SEO Built-In</span>
              <span className="text-gray-300 font-bold">&middot;</span>
              <span>Direct Access</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats bar */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-[60px] border-t border-gray-200 pt-8 w-full max-w-md"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span className="font-heading text-xl font-bold text-[#111111]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
