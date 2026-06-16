"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/components/ui/FadeUp";

const services = [
  {
    icon: Globe,
    title: "SEO-Optimized Website",
    body: "A fast, mobile-friendly website built to rank. Includes on-page SEO, meta tags, sitemap, schema markup, and Google Search Console setup.",
  },
  {
    icon: Zap,
    title: "Speed & Core Web Vitals",
    body: "Every site I build targets 90+ on Google PageSpeed. Fast load times mean better rankings and lower bounce rates.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    body: "Clean layouts, clear calls-to-action, and copy structured to turn visitors into leads. Design with a purpose.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-28 px-6 bg-[#111111] border-y border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
          ref={ref}
        >
          <p className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            What&apos;s included
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 p-8 flex flex-col gap-6 group hover:border-white/25 transition-colors duration-300"
              >
                <div className="w-12 h-12 border border-white/15 flex items-center justify-center group-hover:border-white/35 transition-colors shrink-0">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#888888] leading-relaxed">
                    {service.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
