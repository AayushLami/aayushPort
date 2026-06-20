"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Zap, Search, TrendingUp, BarChart2, Shield } from "lucide-react";
import { fadeUp, staggerContainer } from "@/components/ui/FadeUp";

const services = [
  {
    icon: Globe,
    title: "Custom-Built Website",
    body: "Hand-coded from scratch, no templates. Clean semantic HTML that search engines love.",
  },
  {
    icon: Zap,
    title: "Fast Load Times",
    body: "Optimized for Core Web Vitals. Speed directly affects your Google ranking.",
  },
  {
    icon: Search,
    title: "SEO Foundation",
    body: "Meta tags, sitemaps, and structured data — Google finds you from day one.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    body: "Clear calls-to-action and layouts structured to turn visitors into paying customers.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Tracking",
    body: "Google Analytics and Search Console set up so you see exactly what's working.",
  },
  {
    icon: Shield,
    title: "SSL + Security",
    body: "HTTPS, security headers, and best practices built in from the start.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="services"
      className="min-h-screen px-6 bg-[#f5f5f5] flex flex-col items-center justify-center py-[160px] relative overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-start text-left">
        {/* Section header left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-[60px] text-left"
          ref={ref}
        >
          <p className="text-[12px] tracking-[0.12em] text-[#999999] font-medium uppercase mb-[24px]">
            EVERY BUILD INCLUDES
          </p>
          <h2
            className="font-heading font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Built to rank,<br />not just look good.
          </h2>
        </motion.div>

        {/* 3×2 Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[12px] p-6 flex flex-col items-start gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.07)] border-0 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out cursor-default"
              >
                {/* Horizontal layout inside each card */}
                <div className="flex gap-4 items-start w-full">
                  <Icon
                    size={20}
                    className="text-gray-400 shrink-0 mt-1"
                  />
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="font-heading text-base font-bold text-[#111111] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#444444] leading-[1.6]">
                      {service.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
