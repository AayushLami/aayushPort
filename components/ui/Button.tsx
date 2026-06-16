"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
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
  const base =
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-white text-black border border-white hover:bg-black hover:text-white",
    secondary:
      "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

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
