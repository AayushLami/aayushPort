"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/lib/constants";

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-28 px-6 bg-[#111111] border-y border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase mb-4">
            Process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className="relative flex flex-col gap-6 pr-8 pb-10 md:pb-0"
            >
              {/* Dashed connector line — desktop, between step number and next */}
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-10 right-0 h-px border-t border-dashed border-white/15" />
              )}
              {/* Vertical connector — mobile */}
              {i < processSteps.length - 1 && (
                <div className="md:hidden absolute top-10 left-5 bottom-0 w-px border-l border-dashed border-white/15" />
              )}

              {/* Step number box */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 border border-white/20 bg-[#111111] shrink-0">
                <span className="font-mono text-xs text-[#555555]">
                  0{step.id}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed max-w-[220px]">
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
