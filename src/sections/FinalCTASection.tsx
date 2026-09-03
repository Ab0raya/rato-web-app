"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FinalCTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 sm:py-40 bg-[#0E0E11] overflow-hidden text-center">
      {/* Intense but controlled ambient halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FF6039]/12 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-white shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6039]" />
          <span>{t.finalCta.launchBadge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase"
        >
          {t.finalCta.titleLine1} <br />
          <span className="text-[#FF6039]">{t.finalCta.titleLine2}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-[#9E9EA8] max-w-xl mx-auto leading-relaxed"
        >
          {t.finalCta.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#countdown"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6039] hover:bg-[#ff7550] text-white font-semibold text-sm px-9 py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_-5px_rgba(255,96,57,0.45)] hover:shadow-[0_0_40px_0px_rgba(255,96,57,0.6)] active:scale-[0.98] group"
          >
            <span>{t.finalCta.primaryButton}</span>
            <ArrowRight className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>

          <a
            href="#instant-meal"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1E] hover:bg-[#222228] text-white font-medium text-sm px-8 py-4 rounded-full border border-[#2A2A2F] hover:border-[#FF6039]/40 transition-all active:scale-[0.98]"
          >
            <span>{t.finalCta.secondaryButton}</span>
          </a>
        </motion.div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#9E9EA8]">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#FF6039]" />
            <span>{t.finalCta.footerNotes[0]}</span>
          </div>
          <span>•</span>
          <span>{t.finalCta.footerNotes[1]}</span>
          <span>•</span>
          <span>{t.finalCta.footerNotes[2]}</span>
        </div>
      </div>
    </section>
  );
};
