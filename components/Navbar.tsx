"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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

  const triggerContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-[#e5e5e5]"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo with 32x32px black square & white R inside */}
        <a
          href="#"
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
          aria-label="Rankly — Home"
        >
          <div className="w-8 h-8 bg-black flex items-center justify-center rounded-[6px] shrink-0">
            <span className="font-heading text-base font-bold text-white leading-none">R</span>
          </div>
          <span className="font-heading text-xl font-bold text-black tracking-tight">
            Rankly
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#444444] hover:text-black transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={triggerContactModal}
          className="hidden md:inline-flex items-center justify-center font-semibold text-sm tracking-tight text-white bg-black hover:bg-neutral-800 transition-colors px-[22px] py-[10px] rounded-full cursor-pointer"
        >
          Get Started
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500 hover:text-black transition-colors focus:outline-none p-1"
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
        className="hidden md:hidden border-t border-[#e5e5e5] bg-white"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#444444] hover:text-black transition-colors"
              onClick={() =>
                document.getElementById("mobile-menu")?.classList.add("hidden")
              }
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              triggerContactModal(e);
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="w-full inline-flex items-center justify-center font-semibold text-sm tracking-tight text-white bg-black hover:bg-neutral-800 transition-colors py-[10px] px-[22px] rounded-full cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
