"use client";

import React from "react";
import { ProductShowcaseTabs } from "@/components/interactive/ProductShowcaseTabs";
import { useLanguage } from "@/context/LanguageContext";

export const ProductExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="preview" className="relative py-28 sm:py-36 bg-[#121215] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.productExperience.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t.productExperience.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8]">
            {t.productExperience.subtitle}
          </p>
        </div>

        {/* Tabbed Interactive Showcase Component */}
        <ProductShowcaseTabs />
      </div>
    </section>
  );
};
