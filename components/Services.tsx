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
    <section
      id="services"
      className="min-h-screen px-6 bg-white flex flex-col items-center justify-center py-[160px]"
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-start text-left">
        {/* Section header left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-[80px] text-left"
          ref={ref}
        >
          <p className="text-[12px] tracking-[0.12em] text-[#999999] font-medium uppercase mb-[24px]">
            Services
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111] tracking-[-0.02em]">
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
                className="bg-white rounded-[16px] p-[40px] flex flex-col items-start text-left gap-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-0 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* 40x40 light gray circle icon wrap */}
                <div className="w-10 h-10 bg-[#f0f0f0] rounded-full flex items-center justify-center shrink-0">
                  <Icon
                    size={18}
                    className="text-[#111111]"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading text-base font-bold text-[#111111] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#444444] leading-[1.7]">
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
