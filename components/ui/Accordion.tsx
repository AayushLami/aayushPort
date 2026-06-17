"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
              id={`accordion-btn-${item.id}`}
            >
              <span className="text-base font-medium text-white pr-8 group-hover:text-white/80 transition-colors">
                {item.question}
              </span>
              <span className="shrink-0 text-white/50 group-hover:text-white transition-colors">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[#aaaaaa] leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
