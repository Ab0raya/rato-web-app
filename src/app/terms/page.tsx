"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { LogoMark } from "@/components/ui/LogoMark";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white selection:bg-[#FF6039]">
      <header className="border-b border-[#2A2A2F] py-6 px-4 sm:px-8 bg-[#161616]/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <LogoMark size={34} withText />
            <LanguageSwitcher size="sm" />
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#9E9EA8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl-flip" />
            <span>{t.common.backToHome}</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10 text-left rtl:text-right">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-[#FF6039]">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.legal.preLaunchNotice}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.legal.termsTitle}
          </h1>
          <p className="text-xs text-[#9E9EA8]">
            {t.legal.termsUpdated}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-[#FF6039]/30 text-xs text-[#9E9EA8] leading-relaxed">
          {t.legal.termsNoticeBox}
        </div>

        <div className="space-y-8 text-sm text-[#9E9EA8] leading-relaxed">
          {t.legal.termsSections.map((sec) => (
            <section key={sec.title} className="space-y-3">
              <h2 className="text-lg font-bold text-white">{sec.title}</h2>
              <p>{sec.content}</p>
            </section>
          ))}
        </div>

        <div className="pt-8 border-t border-[#2A2A2F] text-xs text-[#9E9EA8]">
          © {new Date().getFullYear()} RATO. {t.common.allRightsReserved}
        </div>
      </main>
    </div>
  );
}
