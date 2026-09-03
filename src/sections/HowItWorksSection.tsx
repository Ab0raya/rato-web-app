"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stepAssets = [
  "/assets/Edit Nutrition Profile.png",
  "/assets/budget.png",
  "/assets/oading state for Instant Meal screen.png",
  "/assets/meal_details.png",
];

export const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 bg-[#121215] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8]">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid with Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between rounded-3xl bg-[#161616] border border-[#2A2A2F] p-6 hover:border-[#FF6039]/40 transition-all duration-300 group shadow-lg text-left rtl:text-right"
            >
              {/* Top Text Context */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-black text-[#FF6039]">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#9E9EA8] bg-[#1A1A1E] px-2.5 py-1 rounded-full border border-[#2A2A2F]">
                    {step.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#FF6039] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#9E9EA8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Screenshot Visual */}
              <div className="pt-6 mt-6 border-t border-[#2A2A2F]/60 flex justify-center">
                <div className="relative w-full max-w-[200px] aspect-[853/1400] rounded-2xl overflow-hidden border border-[#2A2A2F] shadow-inner bg-[#0E0E11] group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src={stepAssets[idx] || "/assets/meal_details.png"}
                    alt={step.title}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
