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
    <section id="pricing" className="py-32 px-6 bg-white flex flex-col items-center text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <p className="text-xs font-semibold text-[#6b7280] tracking-[0.2em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#111111] mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-[#374151] text-base max-w-lg mx-auto">
            No hidden fees. No surprises. Pick the package that fits.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`
                flex flex-col rounded-xl overflow-hidden border transition-all duration-300
                ${
                  plan.popular
                    ? "bg-[#111111] border-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                    : "bg-white border-[#e5e5e5] hover:border-[#d1d5db] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                }
              `}
            >
              {/* Popular banner */}
              {plan.popular && (
                <div className="bg-white text-center py-2">
                  <span className="text-black text-[10px] font-bold tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center text-center gap-8 p-8 sm:p-10 flex-1">
                {/* Plan name + best for */}
                <div className="text-center flex flex-col items-center">
                  <h3 className={`font-heading text-lg font-bold mb-2 ${plan.popular ? "text-white" : "text-[#111111]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${plan.popular ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>
                    {plan.bestFor}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`font-mono text-5xl font-bold leading-none ${plan.popular ? "text-white" : "text-[#111111]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>
                    {plan.priceLabel}
                  </span>
                </div>

                {/* Divider */}
                <div className={`w-full h-px ${plan.popular ? "bg-white/10" : "bg-[#e5e5e5]"}`} />

                {/* Features */}
                <ul className="flex flex-col items-center text-center gap-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check
                         size={14}
                         className={`shrink-0 ${plan.popular ? "text-white" : "text-[#111111]"}`}
                         strokeWidth={3}
                      />
                      <span className={`text-sm leading-snug ${plan.popular ? "text-[#d1d5db]" : "text-[#374151]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Addon badge */}
                <div className="text-center">
                  <span className={`text-xs px-3 py-1.5 rounded-md inline-block border ${
                    plan.popular
                      ? "border-white/20 text-[#9ca3af]"
                      : "border-[#e5e5e5] text-[#6b7280]"
                  }`}>
                    {plan.addon}
                  </span>
                </div>

                {/* CTA */}
                <Button
                  href="#contact"
                  variant={plan.popular ? "pricingPopular" : "secondary"}
                  size="md"
                  className="w-full justify-center rounded-lg"
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
          className="mt-12 text-center text-sm text-[#6b7280]"
        >
          💡 Maintenance includes monthly speed checks, plugin updates, uptime monitoring, and priority support.
        </motion.p>
      </div>
    </section>
  );
}
