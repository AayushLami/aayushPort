"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
}: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  // useReducedMotion is SSR-safe — no window check needed
  const prefersReduced = useReducedMotion();

  const variant: Variants = prefersReduced
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" as const, delay },
        },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
    >
      {children}
    </motion.div>
  );
}
