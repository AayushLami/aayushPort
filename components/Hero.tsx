"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEADLINE = "Your website should work as hard as you do.";
const CHAR_INTERVAL = 60;



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
      className="section relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#f5f5f5]"
      aria-label="Hero"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
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
        <h1
          className="font-heading font-extrabold text-[#111111] leading-[1.1] tracking-[-0.03em] min-h-[3.3em] sm:min-h-[2.2em] md:min-h-[2.2em] max-w-4xl"
          style={{ fontSize: "clamp(32px, 8vw, 96px)" }}
        >
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
              className="text-[#666666] max-w-[520px] mx-auto leading-relaxed"
              style={{ fontSize: "clamp(15px, 3vw, 20px)" }}
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
              className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
            >
              <button
                onClick={triggerContactModal}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Get Started &rarr;
              </button>
              <a
                href="#pricing"
                className="btn-secondary w-full sm:w-auto justify-center"
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
              className="text-[13px] text-[#888888] font-medium flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-4"
            >
              <span>Fast Delivery</span>
              <span className="text-gray-300 font-bold">&middot;</span>
              <span>SEO Built-In</span>
              <span className="text-gray-300 font-bold">&middot;</span>
              <span>Direct Access</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
