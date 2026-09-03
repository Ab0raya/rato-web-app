"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "rato_preferred_language";
const LANG_EVENT = "rato_lang_change";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "en" || saved === "ar") return saved;
    if (navigator.language && navigator.language.startsWith("ar")) {
      return "ar";
    }
  } catch {
    // ignore
  }
  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      window.dispatchEvent(new Event(LANG_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const nextLang: Language = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  }, [language, setLanguage]);

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";
  const isRTL = dir === "rtl";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRTL,
        t,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
