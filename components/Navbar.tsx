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
  const [isOpen, setIsOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY && latest > 80) {
      setHidden(true);
      setIsOpen(false); // Close mobile menu when scrolling down
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  const triggerContactModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
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

        {/* CTA and Hamburger Group */}
        <div className="flex items-center gap-4">
          <button
            onClick={triggerContactModal}
            className="inline-flex items-center justify-center font-semibold tracking-tight text-white bg-black hover:bg-neutral-800 transition-colors px-4 py-2 text-[14px] md:px-[22px] md:py-[10px] md:text-sm rounded-full cursor-pointer"
          >
            Get Started
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-500 hover:text-black transition-colors focus:outline-none p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <rect y="3" width="20" height="2" />
                <rect y="9" width="20" height="2" />
                <rect y="15" width="20" height="2" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#e5e5e5] bg-white w-full"
        >
          <div className="p-5 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[18px] font-medium text-[#444444] hover:text-black py-4 border-b border-[#e5e5e5] last:border-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}
