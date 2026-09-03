"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { useLanguage } from "@/context/LanguageContext";

export const ProgressSection: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      percentage: 87,
      label: t.progress.caloriesLabel,
      sublabel: t.progress.caloriesSub,
    },
    {
      percentage: 92,
      label: t.progress.proteinLabel,
      sublabel: t.progress.proteinSub,
    },
    {
      percentage: 81,
      label: t.progress.budgetLabel,
      sublabel: t.progress.budgetSub,
    },
    {
      percentage: 76,
      label: t.progress.consistencyLabel,
      sublabel: t.progress.consistencySub,
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.progress.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t.progress.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8]">
            {t.progress.subtitle}
          </p>
        </div>

        {/* 4 Rings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#2A2A2F] text-center space-y-4 hover:border-[#FF6039]/40 transition-colors shadow-lg group"
            >
              <ProgressRing
                percentage={metric.percentage}
                size={140}
                strokeWidth={10}
                showPercentage={true}
              />
              <div className="space-y-1 pt-2">
                <div className="text-base font-bold text-white group-hover:text-[#FF6039] transition-colors">
                  {metric.label}
                </div>
                <div className="text-xs text-[#9E9EA8]">{metric.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Behavior Loop Cycle */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#161616] border border-[#2A2A2F] text-center max-w-2xl mx-auto space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.common.appName} Feedback Loop
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white">
            {t.progress.cycleSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3.5 py-1.5 rounded-full bg-[#1A1A1E] border border-[#2A2A2F]">
                  {step}
                </span>
                {idx < t.progress.cycleSteps.length - 1 && (
                  <span className="text-[#FF6039] rtl-flip">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
