"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Flame,
  Dumbbell,
  Sun,
  Moon,
  Apple,
  UtensilsCrossed,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LocalizedMeal {
  id: string;
  name: string;
  price: number;
  currency: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  matchScore: number;
  ingredients: { name: string; amount: string }[];
  targetDiff: { calories: number; protein: number };
}

export const InstantMealSimulator: React.FC = () => {
  const { t, language } = useLanguage();

  const [budget, setBudget] = useState<number>(30);
  const [mealType, setMealType] = useState<string>("Lunch");
  const [targetCalories, setTargetCalories] = useState<number>(700);
  const [targetProtein, setTargetProtein] = useState<number>(45);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedMealId, setSelectedMealId] = useState<string>("chicken-rice-bowl");
  const [hasGenerated, setHasGenerated] = useState<boolean>(true);

  const mealsData: LocalizedMeal[] = [
    {
      id: "chicken-rice-bowl",
      name: language === "ar" ? "طبق دجاج بالأرز والصلصة" : "Chicken Rice Bowl",
      price: 28.5,
      currency: "EGP",
      calories: 690,
      protein: 44,
      carbs: 88,
      fat: 19,
      matchScore: 88.5,
      ingredients:
        language === "ar"
          ? [
              { name: "صدور دجاج متبلة", amount: "100 جم" },
              { name: "أرز مطهو", amount: "150 جم" },
              { name: "طماطم طازجة", amount: "50 جم" },
              { name: "زيت زيتون بكر", amount: "5 مل" },
            ]
          : [
              { name: "Chicken breast", amount: "100g" },
              { name: "Rice", amount: "150g" },
              { name: "Fresh tomato", amount: "50g" },
              { name: "Olive oil", amount: "5ml" },
            ],
      targetDiff: { calories: -10, protein: -1 },
    },
    {
      id: "beef-pasta-bowl",
      name: language === "ar" ? "طبق مكرونة باللحم الخالي من الدهون" : "Beef Pasta Bowl",
      price: 29.25,
      currency: "EGP",
      calories: 685,
      protein: 45,
      carbs: 82,
      fat: 22,
      matchScore: 91.0,
      ingredients:
        language === "ar"
          ? [
              { name: "لحم بقري مفروم قليل الدسم", amount: "90 جم" },
              { name: "مكرونة قمح كامل", amount: "120 جم" },
              { name: "صلصة طماطم طبيعية", amount: "60 جم" },
              { name: "توابل وأعشاب", amount: "رشة" },
            ]
          : [
              { name: "Lean beef", amount: "90g" },
              { name: "Whole wheat pasta", amount: "120g" },
              { name: "Tomato sauce", amount: "60g" },
              { name: "Herbs & spices", amount: "pinch" },
            ],
      targetDiff: { calories: -15, protein: 0 },
    },
    {
      id: "tuna-quinoa-bowl",
      name: language === "ar" ? "طبق تونة بالكينوا والسلطة الخضراء" : "Tuna Quinoa Bowl",
      price: 28.75,
      currency: "EGP",
      calories: 696,
      protein: 43,
      carbs: 79,
      fat: 24,
      matchScore: 89.2,
      ingredients:
        language === "ar"
          ? [
              { name: "تونة قطع في ماء", amount: "120 جم" },
              { name: "كينوا مطهوة", amount: "140 جم" },
              { name: "خضار مشكل طازج", amount: "80 جم" },
              { name: "ليمون وزيت خفيف", amount: "10 مل" },
            ]
          : [
              { name: "Canned tuna in water", amount: "120g" },
              { name: "Cooked quinoa", amount: "140g" },
              { name: "Mixed greens", amount: "80g" },
              { name: "Lemon vinaigrette", amount: "10ml" },
            ],
      targetDiff: { calories: -4, protein: -2 },
    },
    {
      id: "chicken-wrap",
      name: language === "ar" ? "ساندوتش راب الدجاج المشوي" : "Chicken Wrap",
      price: 27.8,
      currency: "EGP",
      calories: 660,
      protein: 41,
      carbs: 74,
      fat: 20,
      matchScore: 86.8,
      ingredients:
        language === "ar"
          ? [
              { name: "شرائح دجاج مشوية", amount: "95 جم" },
              { name: "خبز تورتيلا قمح كامل", amount: "قطعة واحدة" },
              { name: "خس وخيار مبشور", amount: "60 جم" },
              { name: "صوص زبادي خفيف", amount: "15 جم" },
            ]
          : [
              { name: "Grilled chicken strips", amount: "95g" },
              { name: "Whole grain tortilla", amount: "1 pc" },
              { name: "Shredded lettuce & cucumber", amount: "60g" },
              { name: "Light garlic yogurt sauce", amount: "15g" },
            ],
      targetDiff: { calories: -40, protein: -4 },
    },
  ];

  const selectedMeal =
    mealsData.find((m) => m.id === selectedMealId) || mealsData[0];

  const handleGenerate = () => {
    setIsGenerating(true);
    setCurrentStepIndex(0);

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= t.instantMeal.loadingSteps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsGenerating(false);
            setHasGenerated(true);
            if (budget < 29) {
              setSelectedMealId("chicken-wrap");
            } else if (budget === 30) {
              setSelectedMealId("chicken-rice-bowl");
            } else {
              setSelectedMealId("beef-pasta-bowl");
            }
          }, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 450);
  };

  const mealTypes = [
    { key: "Breakfast", label: t.instantMeal.breakfast, icon: Sun },
    { key: "Lunch", label: t.instantMeal.lunch, icon: UtensilsCrossed },
    { key: "Dinner", label: t.instantMeal.dinner, icon: Moon },
    { key: "Snack", label: t.instantMeal.snack, icon: Apple },
  ];

  const activeMealLabel =
    mealTypes.find((m) => m.key === mealType)?.label || t.instantMeal.lunch;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#1A1A1E] border border-[#2A2A2F] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Interactive Top Controller Bar */}
      <div className="px-6 sm:px-8 py-5 border-b border-[#2A2A2F] bg-[#161616]/90 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#FF6039] shadow-[0_0_8px_#FF6039]" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            {language === "ar" ? "معاينة تفاعلية حية" : "Interactive Product Demo"}
          </span>
          <span className="text-xs text-[#9E9EA8] hidden sm:inline">•</span>
          <span className="text-xs text-[#9E9EA8] hidden sm:inline">
            {language === "ar"
              ? "جرّب محرك موازنة الوجبات بنفسك"
              : "Experience RATO's Core Engine"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-[#9E9EA8]">
            {language === "ar" ? "العملة المستخدمة:" : "Demo Currency:"}
          </span>
          <span className="text-xs font-semibold text-white bg-[#0E0E11] px-2.5 py-1 rounded-md border border-[#2A2A2F]">
            EGP {language === "ar" ? "(جنيه مصري)" : "(Egyptian Pound)"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Input Constraints */}
        <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r rtl:lg:border-r-0 rtl:lg:border-l border-[#2A2A2F] bg-[#161616]/40 text-left rtl:text-right">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#FF6039] uppercase">
              {t.instantMeal.step1Tag}
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {t.instantMeal.budgetTitle}
            </h3>
            <p className="text-xs text-[#9E9EA8] mt-1">
              {t.instantMeal.budgetSub}
            </p>
          </div>

          {/* Budget Selector */}
          <div className="space-y-3 bg-[#0E0E11] p-4 rounded-2xl border border-[#2A2A2F]">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-[#9E9EA8]">{t.instantMeal.mealBudgetLabel}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {budget}
                </span>
                <span className="text-sm font-semibold text-[#FF6039]">EGP</span>
              </div>
            </div>

            <input
              type="range"
              min="20"
              max="60"
              step="5"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-[#2A2A2F] rounded-lg appearance-none cursor-pointer accent-[#FF6039]"
            />

            <div className="flex justify-between gap-2 pt-1">
              {[25, 30, 40, 50].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setBudget(preset)}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    budget === preset
                      ? "bg-[#FF6039] text-white font-bold shadow-[0_0_12px_rgba(255,96,57,0.4)]"
                      : "bg-[#1A1A1E] text-[#9E9EA8] hover:text-white border border-[#2A2A2F]"
                  }`}
                >
                  {preset} EGP
                </button>
              ))}
            </div>
          </div>

          {/* Meal Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#9E9EA8]">{t.instantMeal.mealTypeLabel}</label>
            <div className="grid grid-cols-4 gap-2">
              {mealTypes.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setMealType(key)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                    mealType === key
                      ? "border-[#FF6039] bg-[#FF6039]/10 text-white font-semibold shadow-[0_0_15px_-3px_rgba(255,96,57,0.3)]"
                      : "border-[#2A2A2F] bg-[#0E0E11] text-[#9E9EA8] hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 mb-1 ${mealType === key ? "text-[#FF6039]" : "text-[#9E9EA8]"}`} />
                  <span className="text-[11px]">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Targets */}
          <div className="space-y-3">
            <label className="text-xs font-medium text-[#9E9EA8]">{t.instantMeal.targetsTitle}</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0E0E11] p-3 rounded-xl border border-[#2A2A2F] space-y-1">
                <div className="flex items-center justify-between text-xs text-[#9E9EA8]">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#FF6039]" />
                    <span>{t.instantMeal.caloriesLabel}</span>
                  </div>
                  <span className="text-[11px] font-mono text-white">{targetCalories}</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="1000"
                  step="50"
                  value={targetCalories}
                  onChange={(e) => setTargetCalories(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#2A2A2F] rounded-lg appearance-none cursor-pointer accent-[#FF6039]"
                />
              </div>

              <div className="bg-[#0E0E11] p-3 rounded-xl border border-[#2A2A2F] space-y-1">
                <div className="flex items-center justify-between text-xs text-[#9E9EA8]">
                  <div className="flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-[#FF6039]" />
                    <span>{t.instantMeal.proteinLabel}</span>
                  </div>
                  <span className="text-[11px] font-mono text-white">{targetProtein}g</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={targetProtein}
                  onChange={(e) => setTargetProtein(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#2A2A2F] rounded-lg appearance-none cursor-pointer accent-[#FF6039]"
                />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 bg-[#FF6039] hover:bg-[#ff7550] disabled:bg-[#FF6039]/50 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-[0_0_30px_-5px_rgba(255,96,57,0.45)] cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? t.instantMeal.generatingButton : t.instantMeal.generateButton}</span>
          </button>
          <p className="text-center text-[11px] text-[#9E9EA8]">
            {t.instantMeal.footnote}
          </p>
        </div>

        {/* Right Column: Dynamic Screen State */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-b from-[#1A1A1E] to-[#121215] min-h-[460px]">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-8 text-center space-y-6"
              >
                <div className="relative w-64 sm:w-80 aspect-[16/9] rounded-2xl overflow-hidden bg-[#161616] border-2 border-[#FF6039]/40 shadow-[0_0_35px_-5px_rgba(255,96,57,0.35)]">
                  <Image
                    src="/creating_meal.gif"
                    alt="RATO Creating Meal"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white">
                    {language === "ar" ? "جارٍ بناء " : "Building your "}
                    <span className="text-[#FF6039]">{t.instantMeal.buildingMeal}</span>
                  </h4>
                  <p className="text-sm text-[#9E9EA8] h-6 transition-all duration-300">
                    {t.instantMeal.loadingSteps[currentStepIndex]}
                  </p>
                </div>

                <div className="flex gap-2">
                  {t.instantMeal.loadingSteps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx <= currentStepIndex
                          ? "w-8 bg-[#FF6039] shadow-[0_0_8px_#FF6039]"
                          : "w-4 bg-[#2A2A2F]"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : hasGenerated ? (
              <motion.div
                key={selectedMeal.id + language}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 text-left rtl:text-right"
              >
                <div className="relative p-6 rounded-2xl bg-[#161616] border border-[#2A2A2F] shadow-xl ring-1 ring-white/5 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6039] bg-[#FF6039]/15 border border-[#FF6039]/30 rounded-full px-2.5 py-0.5">
                        {t.instantMeal.bestMatchBadge}
                      </span>
                      <span className="text-xs text-[#9E9EA8]">{t.instantMeal.underBudget}</span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-[#9E9EA8]">{t.instantMeal.priceLabel}</span>
                      <span className="text-2xl font-black text-[#FF6039]">
                        {selectedMeal.price.toFixed(2)}
                      </span>
                      <span className="text-xs font-bold text-white">{selectedMeal.currency}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {selectedMeal.name}
                      </h4>
                      <p className="text-xs text-[#9E9EA8] mt-0.5">
                        {t.instantMeal.mealDesc} {activeMealLabel}.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-center bg-[#0E0E11] px-4 py-2 rounded-xl border border-[#2A2A2F]">
                      <div className="text-right rtl:text-left">
                        <div className="text-base font-bold text-white">{selectedMeal.matchScore}%</div>
                        <div className="text-[10px] text-[#9E9EA8] uppercase tracking-wider">
                          {t.instantMeal.targetMatchLabel}
                        </div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF6039] animate-pulse" />
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 py-3 px-4 rounded-xl bg-[#0E0E11] border border-[#2A2A2F]/80">
                    <div className="text-center">
                      <div className="text-[10px] text-[#9E9EA8] uppercase">{t.instantMeal.caloriesMacro}</div>
                      <div className="text-sm sm:text-base font-bold text-white">{selectedMeal.calories}</div>
                      <div className="text-[9px] text-[#FF6039]">{selectedMeal.targetDiff.calories} kcal</div>
                    </div>
                    <div className="text-center border-l rtl:border-l-0 rtl:border-r border-[#2A2A2F]">
                      <div className="text-[10px] text-[#9E9EA8] uppercase">{t.instantMeal.proteinMacro}</div>
                      <div className="text-sm sm:text-base font-bold text-white">{selectedMeal.protein}g</div>
                      <div className="text-[9px] text-[#FF6039]">{selectedMeal.targetDiff.protein}g</div>
                    </div>
                    <div className="text-center border-l rtl:border-l-0 rtl:border-r border-[#2A2A2F]">
                      <div className="text-[10px] text-[#9E9EA8] uppercase">{t.instantMeal.carbsMacro}</div>
                      <div className="text-sm sm:text-base font-bold text-white">{selectedMeal.carbs}g</div>
                      <div className="text-[9px] text-[#9E9EA8]">{t.instantMeal.balancedLabel}</div>
                    </div>
                    <div className="text-center border-l rtl:border-l-0 rtl:border-r border-[#2A2A2F]">
                      <div className="text-[10px] text-[#9E9EA8] uppercase">{t.instantMeal.fatMacro}</div>
                      <div className="text-sm sm:text-base font-bold text-white">{selectedMeal.fat}g</div>
                      <div className="text-[9px] text-[#9E9EA8]">{t.instantMeal.healthyLabel}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] font-semibold text-[#9E9EA8] uppercase tracking-wider">
                      {t.instantMeal.includedIngredients} ({budget} EGP)
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {selectedMeal.ingredients.map((ing, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg bg-[#0E0E11]/60 border border-[#2A2A2F]/50"
                        >
                          <span className="text-white/90">{ing.name}</span>
                          <span className="text-[#FF6039] font-medium">{ing.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-medium text-[#9E9EA8]">
                    {t.instantMeal.otherOptionsLabel}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {mealsData
                      .filter((m) => m.id !== selectedMeal.id)
                      .slice(0, 3)
                      .map((meal) => (
                        <button
                          key={meal.id}
                          type="button"
                          onClick={() => setSelectedMealId(meal.id)}
                          className="text-left rtl:text-right p-2.5 rounded-xl bg-[#161616] border border-[#2A2A2F] hover:border-[#FF6039]/50 transition-all group cursor-pointer"
                        >
                          <div className="text-xs font-semibold text-white truncate group-hover:text-[#FF6039]">
                            {meal.name}
                          </div>
                          <div className="text-[11px] text-[#FF6039] font-bold mt-0.5">
                            {meal.price.toFixed(2)} EGP
                          </div>
                          <div className="text-[10px] text-[#9E9EA8]">
                            {meal.calories} kcal • {meal.protein}g P
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
