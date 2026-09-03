"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FAQAccordion: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3.5">
      {t.faq.items.map((item, index: number) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#1A1A1E] border-[#FF6039]/40 shadow-lg shadow-black/40"
                : "bg-[#161616]/70 border-[#2A2A2F] hover:border-[#FF6039]/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left rtl:text-right px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6039]"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                {item.question}
              </span>
              <div
                className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-[#FF6039] text-white"
                    : "bg-[#2A2A2F] text-[#9E9EA8]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm text-[#9E9EA8] leading-relaxed border-t border-white/[0.04] text-left rtl:text-right">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
