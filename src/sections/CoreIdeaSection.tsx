"use client";

import React from "react";
import { motion } from "framer-motion";
import { BalanceEngineVisual } from "@/components/interactive/BalanceEngineVisual";
import { useLanguage } from "@/context/LanguageContext";

export const CoreIdeaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-[#FF6039] uppercase tracking-wider"
          >
            {t.coreIdea.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {t.coreIdea.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed"
          >
            {t.coreIdea.description}
          </motion.p>
        </div>

        {/* Visual Engine Component */}
        <BalanceEngineVisual />
      </div>
    </section>
  );
};
