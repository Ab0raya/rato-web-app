"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const screenshotMap: Record<string, string> = {
  "instant-meal": "/assets/instant_meal.png",
  "monthly-plan": "/assets/monthly_plan.png",
  "meal-details": "/assets/meal_details.png",
  "nutrition-report": "/assets/Nutrition_Report.png",
  "progress-tracking": "/assets/reports.png",
  "meal-distribution": "/assets/Meal Distribution.png",
  "saved-meals": "/assets/saved_meals.png",
};

export const ProductShowcaseTabs: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("instant-meal");

  const tabs = t.productExperience.tabs;
  const currentScreen = tabs.find((s) => s.id === activeTab) || tabs[0];
  const imageSrc = screenshotMap[currentScreen.id] || "/assets/instant_meal.png";

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      {/* Tab Navigation Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
        {tabs.map((screen) => {
          const isActive = screen.id === activeTab;
          return (
            <button
              key={screen.id}
              type="button"
              onClick={() => setActiveTab(screen.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#FF6039] text-white shadow-[0_0_20px_-3px_rgba(255,96,57,0.4)]"
                  : "bg-[#1A1A1E] text-[#9E9EA8] hover:text-white border border-[#2A2A2F]"
              }`}
            >
              {screen.title}
            </button>
          );
        })}
      </div>

      {/* Main Showcase Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-[#161616] border border-[#2A2A2F] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle orange background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6039]/5 blur-[120px] pointer-events-none -z-10" />

        {/* Left Column: Screen Context & Details */}
        <div className="lg:col-span-6 space-y-6 text-left rtl:text-right">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
              {currentScreen.subtitle}
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {currentScreen.title}
            </h3>
            <p className="text-base text-[#9E9EA8] leading-relaxed">
              {currentScreen.description}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-sm text-white/90">
              <div className="p-1 rounded-full bg-[#FF6039]/20 text-[#FF6039] mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{t.productExperience.benefit1}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/90">
              <div className="p-1 rounded-full bg-[#FF6039]/20 text-[#FF6039] mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{t.productExperience.benefit2}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/90">
              <div className="p-1 rounded-full bg-[#FF6039]/20 text-[#FF6039] mt-0.5 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{t.productExperience.benefit3}</span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a
              href="#instant-meal"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#FF6039] hover:bg-[#ff7550] px-5 py-3 rounded-full transition-all shadow-md shadow-[#FF6039]/30 group"
            >
              <span>{t.productExperience.ctaButton}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl-flip group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column: Screen in Hardware Frame */}
        <div className="lg:col-span-6 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[340px]"
            >
              <PhoneMockup
                src={imageSrc}
                alt={currentScreen.title}
                glow={true}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
