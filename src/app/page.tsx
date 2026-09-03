import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ProblemSection } from "@/sections/ProblemSection";
import { CoreIdeaSection } from "@/sections/CoreIdeaSection";
import { InstantMealHeroSection } from "@/sections/InstantMealHeroSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { AIEngineSection } from "@/sections/AIEngineSection";
import { MealPlanningSection } from "@/sections/MealPlanningSection";
import { BudgetSection } from "@/sections/BudgetSection";
import { NutritionSection } from "@/sections/NutritionSection";
import { ProgressSection } from "@/sections/ProgressSection";
import { ProductExperienceSection } from "@/sections/ProductExperienceSection";
import { PersonalitySection } from "@/sections/PersonalitySection";
import { PricingTrialSection } from "@/sections/PricingTrialSection";
import { CountdownSection } from "@/sections/CountdownSection";
import { FAQSection } from "@/sections/FAQSection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E11] text-white selection:bg-[#FF6039] selection:text-white flex flex-col relative overflow-x-hidden">
      {/* 01. Sticky Glass Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* 03. Problem Section */}
        <ProblemSection />

        {/* 04. Core Idea Section */}
        <CoreIdeaSection />

        {/* 05. Instant Meal Hero Section (Interactive Simulator) */}
        <InstantMealHeroSection />

        {/* 06. How RATO Works (4 Steps with Screenshots) */}
        <HowItWorksSection />

        {/* 07. AI / Balance Engine Section */}
        <AIEngineSection />

        {/* 08. Meal Planning Section (Monthly & Distribution) */}
        <MealPlanningSection />

        {/* 09. Budget Section */}
        <BudgetSection />

        {/* 10. Nutrition Section */}
        <NutritionSection />

        {/* 11. Progress Section */}
        <ProgressSection />

        {/* 12. Product Experience Section (Tabbed Screenshot Showcase) */}
        <ProductExperienceSection />

        {/* 13. RATO Personality & Doodles Section */}
        <PersonalitySection />

        {/* 14. Pricing & 3-Day Free Trial Section */}
        <PricingTrialSection />

        {/* 15. Dynamic Launch Countdown Section (Jan 1, 2027) */}
        <CountdownSection />

        {/* 16. FAQ Accordion Section */}
        <FAQSection />

        {/* 17. Final CTA Section */}
        <FinalCTASection />
      </main>

      {/* 18. Footer */}
      <Footer />
    </div>
  );
}
