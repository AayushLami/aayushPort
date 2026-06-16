"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className = "", highlighted = false }: CardProps) {
  return (
    <div
      className={`
        bg-[#111111] border
        ${highlighted ? "border-white/30" : "border-white/10"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
