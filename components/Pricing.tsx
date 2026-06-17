"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/components/ui/FadeUp";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="pricing" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-medium text-[#888888] tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Simple, honest pricing
          </h2>
          <p className="text-[#888888] text-base">
            No hidden fees. No surprises. Pick the package that fits.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`
                flex flex-col bg-[#111111] p-8
                border transition-all duration-300
                ${
                  plan.popular
                    ? "border-white/30 shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
                    : "border-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(255,255,255,0.01)]"
                }
              `}
            >
              <div className="flex flex-col gap-7 flex-1">
                {/* Plan name + best for */}
                <div className="flex flex-col gap-3">
                  {/* Most Popular badge — sits above plan name, in flow */}
                  {plan.popular && (
                    <span className="self-start bg-white text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-1.5">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#888888] leading-relaxed">{plan.bestFor}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold text-white leading-none">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#888888]">{plan.priceLabel}</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Features */}
                <ul className="flex flex-col gap-3.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={13}
                        className="text-white mt-0.5 shrink-0"
                        strokeWidth={3}
                      />
                      <span className="text-sm text-[#888888] leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Addon badge */}
                <div>
                  <span className="text-xs text-[#888888] border border-white/10 px-3 py-1.5 inline-block">
                    {plan.addon}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Button
                  href="#contact"
                  variant={plan.popular ? "primary" : "secondary"}
                  size="md"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Maintenance note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm text-[#888888]"
        >
          💡 Maintenance includes monthly speed checks, plugin updates, uptime monitoring, and priority support.
        </motion.p>
      </div>
    </section>
  );
}
