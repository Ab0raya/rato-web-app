import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cientoFont = localFont({
  src: [
    {
      path: "../fonts/ciento-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ciento-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ciento-book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ciento-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ciento-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-ciento",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E11",
};

export const metadata: Metadata = {
  title: "RATO — Eat Better. Spend Smarter.",
  description:
    "RATO helps you find meals that fit your nutritional needs and your budget. Smart AI-powered food planning, personal food budget management, and meal optimization. Launching January 1, 2027.",
  keywords: [
    "RATO",
    "food planning",
    "budget meals",
    "nutrition optimization",
    "AI meal planner",
    "instant meal",
    "macro tracker",
    "food budget",
    "EGP meal planner",
    "pre-launch 2027",
    "تخطيط وجبات",
    "ميزانية طعام",
    "حساب سعرات",
  ],
  authors: [{ name: "RATO Technologies" }],
  creator: "RATO",
  publisher: "RATO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rato.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "ar-EG": "/?lang=ar",
    },
  },
  openGraph: {
    title: "RATO — Your budget. Your body. One smarter choice.",
    description:
      "RATO makes food decisions easier by finding meals that fit both your budget and your nutritional needs. Launching January 1, 2027 on Android.",
    url: "https://rato.app",
    siteName: "RATO",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    type: "website",
    images: [
      {
        url: "/assets/identity.png",
        width: 1024,
        height: 1536,
        alt: "RATO Brand Identity & Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RATO — Eat Better. Spend Smarter.",
    description:
      "There is always a budget to keep your food healthy. Launching January 1, 2027.",
    images: ["/assets/identity.png"],
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cientoFont.variable} ${ibmPlexArabic.variable} dark`}
    >
      <body className="bg-[#0E0E11] text-white min-h-screen flex flex-col font-sans selection:bg-[#FF6039] selection:text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
