"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PricingTrialSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative py-28 sm:py-36 bg-[#121215] border-t border-b border-[#2A2A2F]/60 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.pricing.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8]">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing & Trial Presentation Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#161616] border border-[#2A2A2F] shadow-2xl relative overflow-hidden text-center space-y-8"
        >
          {/* Top highlight ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FF6039]/15 border border-[#FF6039]/30 text-xs font-bold uppercase tracking-wider text-[#FF6039]">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.pricing.preLaunchInfo}</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {t.pricing.planTitle}
            </h3>
            <p className="text-sm font-semibold text-[#FF6039]">
              {t.pricing.planSub}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#0E0E11] border border-[#2A2A2F] text-xs text-[#9E9EA8] leading-relaxed text-left rtl:text-right">
            <strong className="text-white">{t.pricing.pricingNoticeTitle}</strong> {t.pricing.pricingNoticeDesc}
          </div>

          {/* Included Features List */}
          <div className="space-y-3 text-left rtl:text-right max-w-md mx-auto pt-2">
            {t.pricing.features.map((feat) => (
              <div key={feat} className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                <div className="w-5 h-5 rounded-full bg-[#FF6039]/20 text-[#FF6039] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="pt-4">
            <a
              href="#countdown"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#FF6039] hover:bg-[#ff7550] text-white font-semibold py-4 rounded-full transition-all shadow-[0_0_25px_-5px_rgba(255,96,57,0.4)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.pricing.ctaButton}</span>
            </a>
            <p className="text-[11px] text-[#9E9EA8] mt-3">
              {t.pricing.platformInfo}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
