"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Target, Coins, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      question: t.problem.step1Title,
      subtitle: t.problem.step1Sub,
      icon: HelpCircle,
      accent: "text-white",
    },
    {
      question: t.problem.step2Title,
      subtitle: t.problem.step2Sub,
      icon: Target,
      accent: "text-white",
    },
    {
      question: t.problem.step3Title,
      subtitle: t.problem.step3Sub,
      icon: Coins,
      accent: "text-[#FF6039]",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E11] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#FF6039]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-20">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.problem.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.problem.title}
          </h2>
        </div>

        {/* The 3 questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-[#161616] border border-[#2A2A2F] text-left rtl:text-right space-y-4 relative group hover:border-[#FF6039]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] flex items-center justify-center text-[#FF6039]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9E9EA8]/60">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold tracking-tight ${item.accent}`}>
                  {item.question}
                </h3>
                <p className="text-sm text-[#9E9EA8] leading-relaxed">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* The Resolution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6039]/15 border border-[#FF6039]/30 text-xs font-bold text-[#FF6039] uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.problem.resolutionBadge}</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.problem.resolutionTitle}
          </h3>
          <p className="text-base text-[#9E9EA8] leading-relaxed">
            {t.problem.resolutionDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
