"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { LogoMark } from "@/components/ui/LogoMark";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.features, href: "#features" },
    { name: t.nav.instantMeal, href: "#instant-meal" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.preview, href: "#preview" },
    { name: t.nav.pricing, href: "#pricing" },
    { name: t.nav.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E11]/85 backdrop-blur-xl border-b border-[#2A2A2F]/70 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Pre-launch badge */}
        <div className="flex items-center gap-4">
          <LogoMark size={36} withText animated={false} />
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#FF6039] bg-[#FF6039]/10 border border-[#FF6039]/30 rounded-full px-2.5 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6039] animate-pulse" />
            {t.common.preLaunch}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[#9E9EA8] hover:text-white transition-colors duration-150 font-medium hover:underline underline-offset-8 decoration-[#FF6039]/60"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Desktop Language Switcher */}
          <LanguageSwitcher size="sm" />

          <a
            href="#countdown"
            className="group flex items-center gap-2 text-xs font-semibold text-white/90 bg-[#1A1A1E] border border-[#2A2A2F] hover:border-[#FF6039]/50 rounded-full px-3.5 py-2 transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_-3px_rgba(255,96,57,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6039]" />
            <span>{t.nav.launchBadge}</span>
          </a>

          <a
            href="#instant-meal"
            className="text-xs font-semibold text-white bg-[#FF6039] hover:bg-[#ff7550] rounded-full px-4 py-2 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,96,57,0.4)]"
          >
            {t.common.tryInstantMeal}
          </a>
        </div>

        {/* Mobile Hamburger Toggle & Mobile Date */}
        <div className="flex sm:hidden items-center gap-2.5">
          <a
            href="#countdown"
            className="text-[11px] font-medium text-[#FF6039] bg-[#FF6039]/10 border border-[#FF6039]/30 rounded-full px-2.5 py-1"
          >
            {t.common.launchDateNumeric}
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#9E9EA8] hover:text-white bg-[#1A1A1E] border border-[#2A2A2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6039]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#161616]/95 backdrop-blur-2xl border-b border-[#2A2A2F] px-5 py-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2F]">
            <span className="text-xs font-medium text-[#9E9EA8]">Language / اللغة:</span>
            <LanguageSwitcher size="sm" />
          </div>

          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#9E9EA8] hover:text-white py-1 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A2A2F] flex flex-col gap-3">
            <a
              href="#instant-meal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold text-white bg-[#FF6039] hover:bg-[#ff7550] rounded-full py-3"
            >
              {t.common.tryInstantMeal}
            </a>
            <div className="text-center text-xs text-[#9E9EA8]">
              {t.common.platformNotice}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
