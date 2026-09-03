"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Sliders } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useLanguage } from "@/context/LanguageContext";

export const MealPlanningSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-[#121215] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.mealPlanning.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t.mealPlanning.titleLine1} <br className="hidden sm:inline" />
            <span className="text-[#FF6039]">{t.mealPlanning.titleLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8]">
            {t.mealPlanning.subtitle}
          </p>
        </div>

        {/* Dynamic Layered Visual Presentation */}
        <div className="relative pt-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          {/* Left Supporting: Meal Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[280px] lg:scale-95 space-y-4 text-center lg:text-left rtl:lg:text-right order-2 lg:order-1"
          >
            <div className="p-3 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] inline-flex items-center gap-2 text-xs font-semibold text-white">
              <Sliders className="w-4 h-4 text-[#FF6039]" />
              <span>{t.mealPlanning.distributionTag}</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {t.mealPlanning.distributionTitle}
            </h3>
            <p className="text-xs text-[#9E9EA8] leading-relaxed">
              {t.mealPlanning.distributionDesc}
            </p>
            <div className="rounded-[30px] overflow-hidden border border-[#2A2A2F] bg-[#0E0E11] aspect-[853/1600] relative shadow-xl">
              <Image
                src="/assets/Meal Distribution.png"
                alt="Meal Distribution Screen"
                fill
                sizes="280px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Central Star: Monthly Meal Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[350px] sm:max-w-[390px] relative z-20 order-1 lg:order-2"
          >
            <PhoneMockup
              src="/assets/monthly_plan.png"
              alt="Monthly Meal Plan Calendar"
              glow={true}
            />
          </motion.div>

          {/* Right Supporting: Daily Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[280px] lg:scale-95 space-y-4 text-center lg:text-right rtl:lg:text-left order-3"
          >
            <div className="p-3 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] inline-flex items-center gap-2 text-xs font-semibold text-white">
              <Calendar className="w-4 h-4 text-[#FF6039]" />
              <span>{t.mealPlanning.dailyTag}</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              {t.mealPlanning.dailyTitle}
            </h3>
            <p className="text-xs text-[#9E9EA8] leading-relaxed">
              {t.mealPlanning.dailyDesc}
            </p>
            <div className="rounded-[30px] overflow-hidden border border-[#2A2A2F] bg-[#0E0E11] aspect-[853/1600] relative shadow-xl">
              <Image
                src="/assets/daily_plan.png"
                alt="Daily Plan Screen"
                fill
                sizes="280px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
