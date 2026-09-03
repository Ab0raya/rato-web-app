"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle2, Sparkles, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLaunched: boolean;
}

const subscribe = () => () => {};

export const LaunchCountdown: React.FC = () => {
  const { t } = useLanguage();
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLaunched: false,
  });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2027-01-01T00:00:00+02:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isLaunched: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isLaunched: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  const timeUnits = [
    { label: t.common.days, value: timeLeft.days },
    { label: t.common.hours, value: timeLeft.hours },
    { label: t.common.minutes, value: timeLeft.minutes },
    { label: t.common.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto text-center space-y-10">
      {/* Target Date Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A1A1E] border border-[#2A2A2F] text-xs font-semibold text-white/90 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#FF6039] animate-ping" />
        <span>{t.countdown.launchDateLabel}</span>
        <span className="text-[#FF6039] font-bold">{t.common.launchDateFormatted}</span>
        <span className="text-[#9E9EA8]">({t.common.launchDateNumeric})</span>
      </div>

      {/* Countdown or Launched State */}
      {timeLeft.isLaunched ? (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A1A1E] border border-[#FF6039]/40 shadow-[0_0_50px_-10px_rgba(255,96,57,0.3)] space-y-4">
          <div className="inline-flex p-3 rounded-full bg-[#FF6039]/20 text-[#FF6039]">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.countdown.nowAvailableTitle}
          </h3>
          <p className="text-sm text-[#9E9EA8] max-w-md mx-auto">
            {t.countdown.nowAvailableDesc}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="relative p-5 sm:p-7 rounded-3xl bg-[#1A1A1E] border border-[#2A2A2F] shadow-lg group hover:border-[#FF6039]/40 transition-all duration-300"
            >
              {/* Top orange highlight dot */}
              <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 w-1.5 h-1.5 rounded-full bg-[#FF6039]/50 group-hover:bg-[#FF6039] transition-colors" />

              <div className="text-4xl sm:text-6xl font-black tracking-tight text-white font-mono">
                {isMounted ? String(unit.value).padStart(2, "0") : "--"}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#9E9EA8] group-hover:text-[#FF6039] transition-colors">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Platform & Pre-registration CTA */}
      <div className="max-w-md mx-auto space-y-4 pt-2">
        <div className="flex items-center justify-center gap-2 text-xs text-[#9E9EA8]">
          <Smartphone className="w-4 h-4 text-[#FF6039]" />
          <span>{t.common.platformNotice}</span>
        </div>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FF6039]/15 border border-[#FF6039]/40 text-sm font-semibold text-white"
          >
            <CheckCircle2 className="w-5 h-5 text-[#FF6039]" />
            <span>{t.common.subscribedSuccess}</span>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-[#161616] border border-[#2A2A2F] focus-within:border-[#FF6039] transition-colors"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.common.enterEmailPlaceholder}
              required
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-[#9E9EA8] focus:outline-none rtl:text-right"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#FF6039] hover:bg-[#ff7550] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(255,96,57,0.4)] cursor-pointer"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{t.common.getLaunchAlert}</span>
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#9E9EA8]/70">
          {t.common.noSpamNotice}
        </p>
      </div>
    </div>
  );
};
