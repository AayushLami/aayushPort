"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "10+", label: "Sites Built" },
  { value: "95+", label: "Google PageSpeed Score" },
  { value: "#1", label: "First Page Rankings" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="pt-[160px] pb-[160px] px-6 bg-white flex flex-col items-center text-center">
      <div
        ref={ref}
        className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[40px]"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-white border border-[#e5e5e5] rounded-[16px] p-[48px] flex flex-col items-center justify-center text-center gap-2 hover:border-[#d1d5db] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
          >
            <span className="font-heading text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-[#6b7280]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
