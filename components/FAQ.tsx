"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/constants";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="faq" className="section px-6 bg-white border-y border-[#e5e5e5]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          <p className="section-eyebrow text-xs font-semibold text-[#6b7280] tracking-[0.2em] uppercase">
            FAQ
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111]">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
