"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ctaPrimary" | "ctaSecondary" | "pricingPopular";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  // Base classes for site-wide button specification:
  // fully rounded pill shape (100px), px-28 py-14 padding, font-weight 600, font-size 15px
  const base =
    "inline-flex items-center justify-center font-[600] text-[15px] px-[28px] py-[14px] rounded-full tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111] focus-visible:ring-offset-2 cursor-pointer select-none";

  const variants = {
    // Primary button: black bg, white text
    primary:
      "bg-black text-white border border-black hover:bg-neutral-800 hover:border-neutral-800",
    // Secondary button: white bg, 1px solid #d4d4d4, black text
    secondary:
      "bg-white text-black border border-[#d4d4d4] hover:bg-neutral-50",
    // White bg, black text, white border
    ctaPrimary:
      "bg-white text-black border border-white hover:bg-neutral-100",
    // Transparent bg, white text, white border
    ctaSecondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    // White bg, black text, white border, hover transparent
    pricingPopular:
      "bg-white text-black border border-white hover:bg-transparent hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
