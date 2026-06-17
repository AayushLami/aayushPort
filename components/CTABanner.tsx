"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#0a0a0a] border-t border-b border-[#1f1f1f]"
    >
      <div
        ref={ref}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          Ready to rank?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#888888] text-base sm:text-lg max-w-md"
        >
          Let&apos;s build something that actually works for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <Button
            href="mailto:aayush@rankly.dev"
            variant="primary"
            size="lg"
            className="min-w-[200px]"
          >
            Book a Free Call
          </Button>
          <p className="text-xs text-[#888888]">
            No commitment. 30 minutes. Real advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
