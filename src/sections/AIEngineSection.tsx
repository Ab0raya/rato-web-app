"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Scale, Database, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AIEngineSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E11] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 rtl:right-auto rtl:left-1/4 w-96 h-96 bg-[#FF6039]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Responsible Positioning */}
          <div className="lg:col-span-6 space-y-6 text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-[#FF6039] uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>{t.aiEngine.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {t.aiEngine.titleLine1} <br />
              <span className="text-[#FF6039]">{t.aiEngine.titleLine2}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed">
              {t.aiEngine.desc1}
            </p>

            <p className="text-sm text-[#9E9EA8]/80 leading-relaxed">
              {t.aiEngine.desc2}
            </p>

            {/* Principles */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-white/90">
                <Scale className="w-4 h-4 text-[#FF6039] mt-1 shrink-0" />
                <span>
                  <strong>{t.aiEngine.principle1Title}:</strong> {t.aiEngine.principle1Desc}
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-white/90">
                <Database className="w-4 h-4 text-[#FF6039] mt-1 shrink-0" />
                <span>
                  <strong>{t.aiEngine.principle2Title}:</strong> {t.aiEngine.principle2Desc}
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-white/90">
                <ShieldAlert className="w-4 h-4 text-[#FF6039] mt-1 shrink-0" />
                <span>
                  <strong>{t.aiEngine.principle3Title}:</strong> {t.aiEngine.principle3Desc}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Loading & Building Screen Asset Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-3 sm:p-4 rounded-[40px] bg-[#1A1A1E] border border-[#2A2A2F] shadow-2xl max-w-sm w-full"
            >
              <div className="relative rounded-[32px] overflow-hidden aspect-[941/1672] bg-[#0E0E11] border border-black shadow-inner">
                <Image
                  src="/assets/oading state for Instant Meal screen.png"
                  alt="RATO Balance Engine in action"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
