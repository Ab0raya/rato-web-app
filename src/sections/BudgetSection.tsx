"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useLanguage } from "@/context/LanguageContext";

export const BudgetSection: React.FC = () => {
  const { t } = useLanguage();

  const spendingBreakdown = [
    { meal: t.budget.breakfast, amount: 380, percent: 16 },
    { meal: t.budget.lunch, amount: 980, percent: 41 },
    { meal: t.budget.dinner, amount: 760, percent: 32 },
    { meal: t.budget.snacks, amount: 300, percent: 11 },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E11] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-10 rtl:left-auto rtl:right-10 w-96 h-96 bg-[#FF6039]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Phone screenshot of budget.png */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <PhoneMockup
              src="/assets/budget.png"
              alt="RATO Budget Management Interface"
              glow={true}
            />
          </div>

          {/* Right Column: Narrative & Metrics */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-left rtl:text-right">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
                {t.budget.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {t.budget.titleLine1} <br />
                <span className="text-[#FF6039]">{t.budget.titleLine2}</span>
              </h2>
              <p className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed">
                {t.budget.description}
              </p>
            </div>

            {/* Core Budget Statistics Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#2A2A2F] space-y-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#9E9EA8] uppercase tracking-wider">
                    {t.budget.monthlyBudget}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    3,000 <span className="text-xs text-[#9E9EA8]">{t.common.currency}</span>
                  </div>
                </div>

                <div className="space-y-1 border-x border-[#2A2A2F]">
                  <div className="text-[11px] font-bold text-[#9E9EA8] uppercase tracking-wider">
                    {t.budget.planned}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    2,420 <span className="text-xs text-[#9E9EA8]">{t.common.currency}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#FF6039] uppercase tracking-wider">
                    {t.budget.remaining}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#FF6039]">
                    580 <span className="text-xs text-[#FF6039]/80">{t.common.currency}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#9E9EA8]">
                  <span>{t.budget.utilizedLabel}</span>
                  <span className="text-[#FF6039] font-semibold">{t.budget.bufferLabel}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-[#0E0E11] p-0.5 border border-[#2A2A2F]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#FF6039] to-[#ff7d58]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80.7%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Spending by Meal Category */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold text-white">{t.budget.spendingByMeal}</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {spendingBreakdown.map((item) => (
                    <div
                      key={item.meal}
                      className="p-3 rounded-xl bg-[#0E0E11] border border-[#2A2A2F]/80 text-center"
                    >
                      <div className="text-[10px] text-[#9E9EA8] uppercase">{item.meal}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{item.amount} {t.common.currency}</div>
                      <div className="text-[10px] font-medium text-[#FF6039]">{item.percent}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] text-xs text-[#9E9EA8]">
              <TrendingDown className="w-5 h-5 text-[#FF6039] shrink-0" />
              <span>
                <strong>{t.budget.insightTitle}:</strong> {t.budget.insightDesc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
