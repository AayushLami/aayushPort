"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="testimonials"
      className="min-h-screen px-6 bg-white flex flex-col items-center justify-center text-center py-[160px]"
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-[80px] text-center flex flex-col items-center"
        >
          <p className="text-[12px] tracking-[0.12em] text-[#999999] font-medium uppercase mb-[24px]">
            WHAT CLIENTS SAY
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111] tracking-[-0.02em]">
            Real results, real businesses.
          </h2>
        </motion.div>

        {/* Testimonial cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[40px] w-full mb-12"
        >
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] border border-dashed border-gray-300 rounded-[16px] p-[40px] flex flex-col items-center text-center gap-6 justify-center min-h-[250px]"
            >
              {/* Grayed-out stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gray-200 fill-gray-200"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-[#666666] text-sm leading-relaxed italic">
                &ldquo;Your review here &mdash; reach out to past clients to collect testimonials&rdquo;
              </p>

              {/* Client Info Placeholder */}
              <div className="flex flex-col items-center gap-1 mt-2">
                <div className="w-8 h-8 rounded-full border border-dashed border-gray-300 bg-gray-100 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-bold">?</span>
                </div>
                <span className="text-xs font-semibold text-gray-400">Business Owner</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Small note below */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-[#999999]"
        >
          Testimonials coming soon &mdash; currently collecting client feedback
        </motion.p>
      </div>
    </section>
  );
}
