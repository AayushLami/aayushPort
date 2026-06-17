"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, TrendingUp, Search, BarChart2, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "@/components/ui/FadeUp";

const services = [
  {
    icon: Globe,
    title: "Custom-Built Website",
    body: "Hand-coded from scratch — no templates, no drag-and-drop. Clean, semantic HTML that search engines love.",
  },
  {
    icon: Search,
    title: "On-Page SEO",
    body: "Meta tags, schema markup, sitemap, and Google Search Console setup baked in from day one.",
  },
  {
    icon: Zap,
    title: "Speed & Core Web Vitals",
    body: "Every site targets 90+ on Google PageSpeed. Fast load times mean better rankings and lower bounce rates.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    body: "Clear calls-to-action, conversion-focused layouts, and copy structured to turn visitors into leads.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Tracking",
    body: "Google Analytics, Search Console, and conversion tracking set up so you see exactly what's working.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Maintenance",
    body: "Monthly speed audits, updates, and priority support — so your site stays fast and secure long-term.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="pt-[260px] pb-[260px] px-6 bg-white flex flex-col items-center text-center">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-[80px] text-center"
          ref={ref}
        >
          <p className="text-xs font-semibold text-[#6b7280] tracking-[0.2em] uppercase mb-4">
            Services
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111]">
            What&apos;s included
          </h2>
        </motion.div>

        {/* 3×2 Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white border border-[#e5e5e5] rounded-xl p-[40px] flex flex-col items-center text-center gap-4 group hover:border-[#d1d5db] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#f3f4f6] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#111111] transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-[#374151] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-base font-bold text-[#111111]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
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
