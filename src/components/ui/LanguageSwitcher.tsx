"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
  size?: "sm" | "md";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
  size = "md",
}) => {
  const { language, setLanguage } = useLanguage();

  const isEn = language === "en";
  const isAr = language === "ar";

  const sizeClasses = size === "sm" ? "p-0.5 text-xs" : "p-1 text-xs";
  const btnClasses = size === "sm" ? "px-2 py-1" : "px-2.5 py-1";

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-full bg-[#1A1A1E] border border-[#2A2A2F] ${sizeClasses} ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={isEn}
        aria-label="Switch to English"
        className={`rounded-full ${btnClasses} font-semibold transition-all duration-200 cursor-pointer ${
          isEn
            ? "bg-[#FF6039] text-white shadow-[0_0_12px_rgba(255,96,57,0.4)]"
            : "text-[#9E9EA8] hover:text-white hover:bg-white/5"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        aria-pressed={isAr}
        aria-label="التبديل إلى العربية"
        className={`rounded-full ${btnClasses} font-semibold transition-all duration-200 cursor-pointer ${
          isAr
            ? "bg-[#FF6039] text-white shadow-[0_0_12px_rgba(255,96,57,0.4)]"
            : "text-[#9E9EA8] hover:text-white hover:bg-white/5"
        }`}
      >
        عربي
      </button>
    </div>
  );
};
