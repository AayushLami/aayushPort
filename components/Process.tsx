"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Layers, MessageSquareMore, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We talk about your goals, audience, and what success looks like.",
  },
  {
    icon: Layers,
    title: "Design & Build",
    description: "I build your site with SEO baked in from day one — not bolted on after.",
  },
  {
    icon: MessageSquareMore,
    title: "Review & Revise",
    description: "You give feedback. I refine. No guesswork, no surprises.",
  },
  {
    icon: Rocket,
    title: "Launch & Rank",
    description: "We go live. I submit to Google and set up tracking so you can see the results.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="pt-[160px] pb-[160px] px-6 bg-white border-y border-[#e5e5e5] flex flex-col items-center text-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-[80px] text-center"
        >
          <p className="text-xs font-semibold text-[#6b7280] tracking-[0.2em] uppercase mb-[24px]">
            Process
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111]">
            How it works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] w-full">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="bg-white border border-[#e5e5e5] rounded-xl p-[48px] flex flex-col items-center text-center gap-5 hover:border-[#d1d5db] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-[#f3f4f6] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#111111] transition-colors duration-300">
                  <Icon size={20} className="text-[#374151] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-base font-bold text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
