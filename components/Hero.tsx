"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
    // Check prefers-reduced-motion
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          animation: "drift 20s linear infinite",
        }}
      />
      {/* Gradient overlay to fade the dots at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #0a0a0a 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-white" />
          <span className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase">
            SEO-Optimized Websites
          </span>
        </div>

        {/* Typewriter headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight min-h-[1.2em]">
          {displayed}
          <span
            className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle"
            style={{
              animation: typingDone ? "blink 1s step-end infinite" : "none",
              opacity: typingDone ? 1 : 1,
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
              className="text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed"
            >
              I build fast, SEO-optimized websites that rank on Google and turn
              visitors into customers.{" "}
              <span className="text-white/60">
                No templates. No fluff.
              </span>
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
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button href="#pricing" variant="primary" size="lg">
                See Pricing
              </Button>
              <Button href="#work" variant="secondary" size="lg">
                View My Work
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats bar */}
        <AnimatePresence>
          {typingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-2"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span className="font-display text-xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#888888] tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-white tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
