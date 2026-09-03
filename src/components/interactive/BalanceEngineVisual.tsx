"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, Flame, ShoppingBag, ArrowDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const BalanceEngineVisual: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 sm:p-12 rounded-3xl bg-[#161616] border border-[#2A2A2F] shadow-2xl overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6039]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Input Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
        {/* Node 1: Budget */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] hover:border-[#FF6039]/40 transition-colors text-center space-y-2 shadow-lg"
        >
          <div className="w-10 h-10 mx-auto rounded-xl bg-[#FF6039]/10 border border-[#FF6039]/20 flex items-center justify-center text-[#FF6039]">
            <Wallet className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
            {t.coreIdea.node1Constraint}
          </div>
          <h4 className="text-base font-bold text-white">{t.coreIdea.node1Title}</h4>
          <p className="text-xs text-[#9E9EA8]">
            {t.coreIdea.node1Desc}
          </p>
        </motion.div>

        {/* Node 2: Nutrition */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] hover:border-[#FF6039]/40 transition-colors text-center space-y-2 shadow-lg"
        >
          <div className="w-10 h-10 mx-auto rounded-xl bg-[#FF6039]/10 border border-[#FF6039]/20 flex items-center justify-center text-[#FF6039]">
            <Flame className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
            {t.coreIdea.node2Constraint}
          </div>
          <h4 className="text-base font-bold text-white">{t.coreIdea.node2Title}</h4>
          <p className="text-xs text-[#9E9EA8]">
            {t.coreIdea.node2Desc}
          </p>
        </motion.div>

        {/* Node 3: Food Data */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl bg-[#1A1A1E] border border-[#2A2A2F] hover:border-[#FF6039]/40 transition-colors text-center space-y-2 shadow-lg"
        >
          <div className="w-10 h-10 mx-auto rounded-xl bg-[#FF6039]/10 border border-[#FF6039]/20 flex items-center justify-center text-[#FF6039]">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF6039]">
            {t.coreIdea.node3Constraint}
          </div>
          <h4 className="text-base font-bold text-white">{t.coreIdea.node3Title}</h4>
          <p className="text-xs text-[#9E9EA8]">
            {t.coreIdea.node3Desc}
          </p>
        </motion.div>
      </div>

      {/* Animated Convergence Lines */}
      <div className="relative py-8 flex flex-col items-center justify-center">
        <svg
          className="w-full max-w-lg h-24 stroke-[#2A2A2F]"
          viewBox="0 0 400 90"
          fill="none"
        >
          <path
            d="M 60 0 C 60 45, 200 20, 200 90"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 200 0 L 200 90"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M 340 0 C 340 45, 200 20, 200 90"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2F" />
              <stop offset="60%" stopColor="#FF6039" />
              <stop offset="100%" stopColor="#FF6039" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Convergence Core: RATO Core */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative -mt-4 p-4 rounded-3xl bg-[#1A1A1E] border-2 border-[#FF6039] shadow-[0_0_40px_-5px_rgba(255,96,57,0.5)] flex items-center gap-4 z-20"
        >
          <div className="relative w-12 h-12">
            <Image
              src="/assets/logo.png"
              alt="RATO Core"
              fill
              className="object-contain animate-spin-slow"
              style={{ animationDuration: "20s" }}
            />
          </div>
          <div className="text-left rtl:text-right">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black tracking-wider text-white">
                {t.coreIdea.engineTitle}
              </span>
              <span className="text-[10px] uppercase font-bold text-[#FF6039] bg-[#FF6039]/15 px-2 py-0.5 rounded-full">
                {t.coreIdea.engineBadge}
              </span>
            </div>
            <p className="text-xs text-[#9E9EA8]">
              {t.coreIdea.engineDesc}
            </p>
          </div>
        </motion.div>

        <ArrowDown className="w-5 h-5 text-[#FF6039] mt-3 animate-bounce" />
      </div>

      {/* Output Node: The Right Meal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-md mx-auto p-5 rounded-2xl bg-[#0E0E11] border border-[#FF6039]/40 text-center shadow-lg relative"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6039] mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.coreIdea.outputBadge}</span>
        </div>
        <h4 className="text-xl font-black text-white">{t.coreIdea.outputTitle}</h4>
        <div className="mt-2 flex items-center justify-center gap-4 text-xs">
          <span className="text-white font-semibold">{t.coreIdea.outputMeal}</span>
          <span className="text-[#9E9EA8]">•</span>
          <span className="text-[#FF6039] font-bold">28.50 {t.common.currency}</span>
          <span className="text-[#9E9EA8]">•</span>
          <span className="text-white font-medium">690 {t.common.kcalUnit} / 44{t.common.proteinUnit}</span>
        </div>
        <p className="text-[11px] text-[#9E9EA8] mt-2">
          {t.coreIdea.outputDesc}
        </p>
      </motion.div>
    </div>
  );
};
