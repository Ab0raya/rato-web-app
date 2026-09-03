"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Smartphone } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Doodle } from "@/components/ui/Doodle";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden flex items-center">
      {/* Background Ambience & Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF6039]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 rtl:right-auto rtl:left-10 w-96 h-96 bg-[#FF6039]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left rtl:lg:text-right"
          >
            {/* Launch Date Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6039] animate-pulse" />
              <span className="text-[#FF6039]">{t.hero.launchStatement}</span>
              <span>{t.common.launchDateFormatted}</span>
              <span className="text-[#9E9EA8]">({t.common.launchDateNumeric})</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.12] uppercase">
              {t.hero.headlineLine1}
              <br />
              {t.hero.headlineLine2}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6039] via-[#ff7e5a] to-[#FF6039]">
                {t.hero.headlineLine3}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#9E9EA8] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.supportingCopy}
            </p>

            <div className="text-xs sm:text-sm text-[#9E9EA8]/80 max-w-xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6039]" />
              <span>&ldquo;{t.hero.quoteStatement}&rdquo;</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-2">
              <a
                href="#instant-meal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6039] hover:bg-[#ff7550] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_-5px_rgba(255,96,57,0.45)] hover:shadow-[0_0_40px_0px_rgba(255,96,57,0.6)] active:scale-[0.98] group"
              >
                <span>{t.common.exploreInstantMeal}</span>
                <ArrowRight className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1E] hover:bg-[#222228] text-white font-medium text-sm px-7 py-4 rounded-full border border-[#2A2A2F] hover:border-[#FF6039]/40 transition-all active:scale-[0.98]"
              >
                <span>{t.common.seeHowItWorks}</span>
              </a>
            </div>

            {/* Platform & Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-6 text-xs text-[#9E9EA8]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#FF6039]" />
                <span>{t.hero.androidAtLaunch}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF6039]" />
                <span>{t.hero.trialIncluded}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF6039]" />
                <span>{t.hero.noStockNotice}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Product Visual with Floating Context Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Subtle Floating Doodles */}
            <div className="absolute -top-6 -left-6 rtl:-left-auto rtl:-right-6 hidden sm:block">
              <Doodle type="sparkles" size={32} delay={0} />
            </div>
            <div className="absolute top-1/2 -right-8 rtl:-right-auto rtl:-left-8 hidden sm:block">
              <Doodle type="broccoli" size={30} delay={1.5} />
            </div>
            <div className="absolute -bottom-8 -left-4 rtl:-left-auto rtl:-right-4 hidden sm:block">
              <Doodle type="wallet" size={28} delay={2.5} />
            </div>

            {/* Floating Live Card: Budget Input */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 sm:-left-12 rtl:-left-auto rtl:-right-6 rtl:sm:-right-12 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1A1E]/90 backdrop-blur-xl border border-[#2A2A2F] shadow-2xl"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FF6039]/15 flex items-center justify-center text-[#FF6039]">
                <span className="text-xs font-black">EGP</span>
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-[10px] uppercase font-bold text-[#9E9EA8]">{t.hero.mealBudgetLabel}</div>
                <div className="text-sm font-extrabold text-white">{t.hero.mealBudgetValue}</div>
              </div>
            </motion.div>

            {/* Floating Live Card: Targets */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 -right-6 sm:-right-12 rtl:-right-auto rtl:-left-6 rtl:sm:-left-12 z-20 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1A1E]/90 backdrop-blur-xl border border-[#2A2A2F] shadow-2xl"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FF6039]/15 flex items-center justify-center text-[#FF6039]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-[10px] uppercase font-bold text-[#9E9EA8]">{t.hero.targetGoalsLabel}</div>
                <div className="text-xs font-bold text-white">{t.hero.targetGoalsValue}</div>
              </div>
            </motion.div>

            {/* Floating Live Card: Generated Result */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 rtl:-right-auto rtl:-left-4 rtl:sm:-left-8 z-20 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#161616]/95 backdrop-blur-xl border border-[#FF6039]/40 shadow-2xl"
            >
              <div className="text-left rtl:text-right">
                <div className="text-[10px] font-bold text-[#FF6039] uppercase tracking-wider">
                  {t.hero.generatedMatchBadge}
                </div>
                <div className="text-sm font-black text-white">{t.hero.sampleMealName}</div>
                <div className="text-xs text-[#9E9EA8]">
                  {t.hero.sampleMealDetails}
                </div>
              </div>
            </motion.div>

            {/* Center Phone Mockup displaying Instant Meal Screenshot */}
            <PhoneMockup
              src="/assets/instant_meal.png"
              alt="RATO Instant Meal Experience"
              priority={true}
              glow={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
