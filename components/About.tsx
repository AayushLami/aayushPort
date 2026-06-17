"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          {/* Left — Text */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase"
            >
              About
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2">
                Aayush Lamichhane
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-white block w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#888888] leading-relaxed text-base max-w-lg"
            >
              I&apos;m a web developer focused on one thing: building websites
              that actually rank. I&apos;ve seen too many small businesses pay
              thousands for a beautiful site that Google ignores. I fix that.
              Every site I build is fast, technically sound, and structured for
              search from the ground up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="text-sm text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
              >
                Work with me →
              </a>
            </motion.div>
          </div>

          {/* Right — Lighthouse Score Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0d0d0d] border border-white/10 overflow-hidden"
          >
            {/* Terminal titlebar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-[#111111]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 font-mono text-xs text-[#555555]">
                lighthouse — chrome
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-7 font-mono text-sm space-y-5">
              <div>
                <p className="text-[#555555] text-xs mb-1">
                  $ lighthouse https://yourbusiness.com
                </p>
                <p className="text-[#444444] text-xs">Analyzing... done in 2.4s</p>
              </div>

              <div className="space-y-3.5">
                {[
                  { label: "Performance", score: 97 },
                  { label: "Accessibility", score: 100 },
                  { label: "Best Practices", score: 100 },
                  { label: "SEO", score: 100 },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-center gap-4">
                    <span className="text-[#666666] text-xs w-28 shrink-0">
                      {metric.label}
                    </span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-none overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-green-400 w-8 text-right">
                      {metric.score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1.5">
                <p className="text-xs text-green-400">✓ No render-blocking resources</p>
                <p className="text-xs text-green-400">✓ Properly sized images</p>
                <p className="text-xs text-green-400">✓ Efficient cache policy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
