"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/components/ui/FadeUp";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const triggerContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <section
      id="pricing"
      className="section min-h-screen px-6 bg-[#f5f5f5] flex flex-col items-center justify-center relative overflow-hidden"
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
        {/* Header - Left Aligned */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title text-left w-full flex flex-col items-start mb-[56px]"
        >
          <p className="section-eyebrow text-[12px] tracking-[0.12em] text-[#999999] font-medium uppercase mb-[12px]">
            Pricing
          </p>
          <h2
            className="font-heading font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-none"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Simple pricing.<br />No surprises.
          </h2>
          <p className="text-[15px] text-[#888888] mt-4 font-normal">
            50% upfront, 50% on launch.
          </p>
          {/* Reassurance pill */}
          <div className="inline-flex items-center gap-1.5 px-[14px] py-[6px] rounded-full bg-white border border-[#e0e0e0] text-[13px] font-semibold text-[#444444] mt-3">
            <span className="text-emerald-500 font-bold">✓</span> No commitment until you approve the design
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="card-grid grid grid-cols-1 md:grid-cols-3 w-full"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`
                flex flex-col rounded-[16px] overflow-hidden border transition-all duration-200 ease-out hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                ${
                  plan.popular
                    ? "bg-[#111111] border-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                    : "bg-white border-[#e5e5e5] shadow-sm"
                }
              `}
            >
              {/* Popular banner */}
              {plan.popular && (
                <div className="bg-white text-center py-2 border-b border-gray-100">
                  <span className="text-black text-[10px] font-bold tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="card flex flex-col items-start text-left gap-8 flex-1">
                {/* Plan name + best for */}
                <div className="flex flex-col items-start text-left">
                  <h3 className={`font-heading text-lg font-bold mb-1.5 ${plan.popular ? "text-white" : "text-[#111111]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${plan.popular ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>
                    {plan.bestFor}
                  </p>
                </div>

                {/* Eyebrow above price + Price */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-1">
                    {plan.id === "starter" ? "STARTER" : plan.id === "professional" ? "PROFESSIONAL" : "CUSTOM"}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-mono text-5xl font-bold leading-none ${plan.popular ? "text-white" : "text-[#111111]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.popular ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>
                      {plan.priceLabel}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`w-full h-px ${plan.popular ? "bg-white/10" : "bg-[#e5e5e5]"}`} />

                {/* Features */}
                <ul className="flex flex-col items-start gap-4 flex-1 w-full text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check
                        size={14}
                        className={`shrink-0 ${plan.popular ? "text-white" : "text-[#111111]"}`}
                        strokeWidth={3}
                      />
                      <span className={`text-sm leading-snug ${plan.popular ? "text-[#d1d5db]" : "text-[#444444]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={triggerContactModal}
                  className={`
                    w-full inline-flex items-center justify-center font-[600] text-[15px] tracking-tight transition-all duration-200 px-[28px] py-[14px] rounded-full cursor-pointer
                    ${
                      plan.popular
                        ? "bg-white text-black border border-white hover:bg-neutral-100"
                        : "bg-black text-white border border-black hover:bg-neutral-800"
                    }
                  `}
                >
                  Get started &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full-width maintenance card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileHover={{ y: -3 }}
          className="mt-[24px] w-full bg-white rounded-[16px] px-[28px] py-[20px] flex items-center justify-between gap-4 text-left shadow-[0_1px_3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out cursor-default"
        >
          <div className="flex flex-col gap-1 text-left">
            <span className="font-heading text-base font-bold text-[#111111]">
              Monthly maintenance
            </span>
            <span className="text-xs text-gray-500">
              Includes monthly page audits, plugin updates, CMS maintenance, and priority support.
            </span>
          </div>
          <span className="font-mono text-xl font-bold text-[#111111] shrink-0">
            $50/mo
          </span>
        </motion.div>
      </div>
    </section>
  );
}
