"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Doodle } from "@/components/ui/Doodle";
import { Smile } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PersonalitySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0E11] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6039]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#161616] border border-[#2A2A2F] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Hand-drawn floating doodles scattered sparingly */}
          <div className="absolute top-8 left-8 rtl:left-auto rtl:right-8 hidden sm:block">
            <Doodle type="sparkle" size={26} delay={0} />
          </div>
          <div className="absolute bottom-10 left-16 rtl:left-auto rtl:right-16 hidden sm:block">
            <Doodle type="tomato" size={28} delay={1.2} />
          </div>
          <div className="absolute top-12 right-16 rtl:right-auto rtl:left-16 hidden sm:block">
            <Doodle type="lightning" size={24} delay={2.4} />
          </div>
          <div className="absolute bottom-8 right-12 rtl:right-auto rtl:left-12 hidden sm:block">
            <Doodle type="notepad" size={28} delay={3} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Personality & Brand Companion */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-[#FF6039] uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5" />
                <span>{t.personality.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {t.personality.title}
              </h2>

              <div className="space-y-2 text-lg sm:text-xl font-bold text-white">
                <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6039]" />
                  <span>{t.personality.point1}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6039]" />
                  <span>{t.personality.point2}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start rtl:lg:justify-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6039]" />
                  <span>{t.personality.point3}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t.personality.description}
              </p>
            </div>

            {/* Right Column: Character Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#1A1A1E] border-2 border-[#2A2A2F] p-4 flex items-center justify-center shadow-xl ring-1 ring-white/5"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/oading state for Instant Meal screen.png"
                    alt="RATO Companion"
                    fill
                    className="object-cover object-top scale-110"
                  />
                </div>
                <div className="absolute -bottom-3 px-4 py-1.5 rounded-full bg-[#0E0E11] border border-[#FF6039]/40 text-xs font-bold text-white shadow-lg">
                  {t.personality.companionTag}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
