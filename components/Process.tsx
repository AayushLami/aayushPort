"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/lib/constants";

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-32 px-6 bg-[#111111] border-y border-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase mb-5">
            Process
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col gap-5 hover:border-white/20 transition-all duration-300"
            >
              {/* Step number */}
              <div className="flex items-center justify-center w-10 h-10 border border-white/20 rounded-lg bg-[#111111] shrink-0">
                <span className="font-mono text-xs text-[#555555]">
                  0{step.id}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-[#aaaaaa] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
