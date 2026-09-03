"use client";

import React from "react";
import { motion } from "framer-motion";
import { InstantMealSimulator } from "@/components/interactive/InstantMealSimulator";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const InstantMealHeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="instant-meal" className="relative py-24 sm:py-36 bg-[#0E0E11] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF6039]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6039]/15 border border-[#FF6039]/30 text-xs font-bold text-[#FF6039] uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.instantMeal.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {t.instantMeal.titleLine1}
            <br />
            <span className="text-[#FF6039]">{t.instantMeal.titleLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed"
          >
            {t.instantMeal.description}
          </motion.p>
        </div>

        {/* Interactive Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <InstantMealSimulator />
        </motion.div>

        {/* 3 Core Highlights under simulator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left rtl:text-right">
          <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2F] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
              {t.instantMeal.feature1Title}
            </div>
            <h4 className="text-lg font-bold text-white">{t.instantMeal.feature1Title}</h4>
            <p className="text-xs text-[#9E9EA8] leading-relaxed">
              {t.instantMeal.feature1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2F] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
              {t.instantMeal.feature2Title}
            </div>
            <h4 className="text-lg font-bold text-white">{t.instantMeal.feature2Title}</h4>
            <p className="text-xs text-[#9E9EA8] leading-relaxed">
              {t.instantMeal.feature2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2F] space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
              {t.instantMeal.feature3Title}
            </div>
            <h4 className="text-lg font-bold text-white">{t.instantMeal.feature3Title}</h4>
            <p className="text-xs text-[#9E9EA8] leading-relaxed">
              {t.instantMeal.feature3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
