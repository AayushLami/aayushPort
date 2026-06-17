"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#1f1f1f]"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Rankly — Home"
        >
          Rankly
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#888888] hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <Button
          href="#contact"
          variant="primary"
          size="sm"
          className="hidden md:inline-flex"
        >
          Get Started
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#888888] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-1"
          aria-label="Open menu"
          onClick={() => {
            const el = document.getElementById("mobile-menu");
            if (el) el.classList.toggle("hidden");
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect y="3" width="20" height="2" />
            <rect y="9" width="20" height="2" />
            <rect y="15" width="20" height="2" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a]"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#888888] hover:text-white transition-colors"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            onClick={() =>
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
