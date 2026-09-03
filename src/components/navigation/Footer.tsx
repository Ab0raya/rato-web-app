"use client";

import React from "react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.features, href: "#features" },
    { name: t.nav.instantMeal, href: "#instant-meal" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.preview, href: "#preview" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.faq, href: "#faq" },
  ];

  const legalLinks = [
    { name: t.footer.privacy, href: "/privacy" },
    { name: t.footer.terms, href: "/terms" },
    { name: t.footer.refund, href: "/refund" },
  ];

  return (
    <footer className="relative bg-[#0E0E11] border-t border-[#2A2A2F]/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FF6039]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#FF6039]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#2A2A2F]/60">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <LogoMark size={42} withText animated={false} />
              <LanguageSwitcher size="sm" />
            </div>
            <p className="text-sm text-[#9E9EA8] max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-[#9E9EA8]/70 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#9E9EA8]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF6039]" />
              <span>{t.footer.launchInfo}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9E9EA8] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Product Notes */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#9E9EA8] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <p className="text-[11px] text-[#9E9EA8]/70 leading-normal">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9EA8]">
          <div>
            © {new Date().getFullYear()} RATO. {t.common.allRightsReserved}
          </div>
          <div className="flex items-center gap-6">
            <span>{t.common.preLaunch}</span>
            <span>•</span>
            <span>{t.common.launchDateNumeric}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
