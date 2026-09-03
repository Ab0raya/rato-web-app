"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useLanguage } from "@/context/LanguageContext";

export const NutritionSection: React.FC = () => {
  const { t } = useLanguage();

  const nutrients = [
    { name: t.nutrition.calories, target: "2,400 kcal", actual: "2,280 kcal", percent: 95 },
    { name: t.nutrition.protein, target: "150g", actual: "142g", percent: 95 },
    { name: t.nutrition.carbs, target: "260g", actual: "248g", percent: 95 },
    { name: t.nutrition.fat, target: "70g", actual: "68g", percent: 97 },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#121215] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative & Target vs Actual Bars */}
          <div className="lg:col-span-7 space-y-8 text-left rtl:text-right">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
                {t.nutrition.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {t.nutrition.titleLine1} <span className="text-[#FF6039]">{t.nutrition.titleLine2}</span>
              </h2>
              <p className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed">
                {t.nutrition.description}
              </p>
            </div>

            {/* Target vs Actual Grid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#2A2A2F] space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2F]">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  {t.nutrition.targetVsActual}
                </div>
                <div className="text-xs text-[#FF6039] font-semibold">
                  {t.nutrition.weeklyAccuracy}
                </div>
              </div>

              <div className="space-y-4">
                {nutrients.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#9E9EA8]">{item.actual} / {item.target}</span>
                        <span className="font-bold text-[#FF6039] bg-[#FF6039]/10 px-2 py-0.5 rounded-full">
                          {item.percent}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#0E0E11] p-0.5 border border-[#2A2A2F]">
                      <motion.div
                        className="h-full rounded-full bg-[#FF6039]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] text-xs text-[#9E9EA8] leading-relaxed">
              <span className="text-white font-semibold">{t.nutrition.disclaimerTitle}</span> {t.nutrition.disclaimerDesc}
            </div>
          </div>

          {/* Right Column: Authentic Nutrition Report Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              src="/assets/Nutrition_Report.png"
              alt="RATO Nutrition Report Screenshot"
              glow={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
