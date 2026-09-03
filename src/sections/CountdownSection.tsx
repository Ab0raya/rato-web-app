"use client";

import React from "react";
import { motion } from "framer-motion";
import { LaunchCountdown } from "@/components/interactive/LaunchCountdown";
import { LogoMark } from "@/components/ui/LogoMark";
import { useLanguage } from "@/context/LanguageContext";

export const CountdownSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="countdown" className="relative py-32 sm:py-44 bg-[#0E0E11] overflow-hidden">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF6039]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Animated RATO Circular Logo Mark */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] shadow-2xl"
          >
            <LogoMark size={64} animated={true} />
          </motion.div>
        </div>

        {/* Section Headline */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6039]">
            {t.countdown.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {t.countdown.title}
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed">
            {t.countdown.description}
          </p>
        </div>

        {/* Dynamic Countdown Component */}
        <LaunchCountdown />
      </div>
    </section>
  );
};
