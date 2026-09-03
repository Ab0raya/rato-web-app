export type Language = "en" | "ar";

export interface Translations {
  common: {
    appName: string;
    preLaunch: string;
    launchDate: string;
    launchDateFormatted: string;
    launchDateNumeric: string;
    platformNotice: string;
    platformBadge: string;
    tryInstantMeal: string;
    seeHowItWorks: string;
    exploreProduct: string;
    exploreInstantMeal: string;
    getLaunchAlert: string;
    enterEmailPlaceholder: string;
    subscribedSuccess: string;
    noSpamNotice: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    currency: string;
    kcalUnit: string;
    proteinUnit: string;
    switchLangEn: string;
    switchLangAr: string;
    switchLangAria: string;
    backToHome: string;
    allRightsReserved: string;
  };
  nav: {
    features: string;
    instantMeal: string;
    howItWorks: string;
    preview: string;
    pricing: string;
    faq: string;
    launchBadge: string;
  };
  hero: {
    launchStatement: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine3: string;
    supportingCopy: string;
    quoteStatement: string;
    androidAtLaunch: string;
    trialIncluded: string;
    noStockNotice: string;
    mealBudgetLabel: string;
    mealBudgetValue: string;
    targetGoalsLabel: string;
    targetGoalsValue: string;
    generatedMatchBadge: string;
    sampleMealName: string;
    sampleMealDetails: string;
  };
  problem: {
    badge: string;
    title: string;
    step1Title: string;
    step1Sub: string;
    step2Title: string;
    step2Sub: string;
    step3Title: string;
    step3Sub: string;
    resolutionBadge: string;
    resolutionTitle: string;
    resolutionDesc: string;
  };
  coreIdea: {
    badge: string;
    title: string;
    description: string;
    node1Constraint: string;
    node1Title: string;
    node1Desc: string;
    node2Constraint: string;
    node2Title: string;
    node2Desc: string;
    node3Constraint: string;
    node3Title: string;
    node3Desc: string;
    engineTitle: string;
    engineBadge: string;
    engineDesc: string;
    outputBadge: string;
    outputTitle: string;
    outputMeal: string;
    outputDesc: string;
  };
  instantMeal: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    step1Tag: string;
    budgetTitle: string;
    budgetSub: string;
    mealBudgetLabel: string;
    mealTypeLabel: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    snack: string;
    targetsTitle: string;
    caloriesLabel: string;
    proteinLabel: string;
    generateButton: string;
    generatingButton: string;
    footnote: string;
    buildingMeal: string;
    loadingSteps: string[];
    bestMatchBadge: string;
    underBudget: string;
    priceLabel: string;
    mealDesc: string;
    targetMatchLabel: string;
    caloriesMacro: string;
    proteinMacro: string;
    carbsMacro: string;
    fatMacro: string;
    balancedLabel: string;
    healthyLabel: string;
    includedIngredients: string;
    otherOptionsLabel: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      description: string;
      highlight: string;
    }[];
  };
  aiEngine: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc1: string;
    desc2: string;
    principle1Title: string;
    principle1Desc: string;
    principle2Title: string;
    principle2Desc: string;
    principle3Title: string;
    principle3Desc: string;
  };
  mealPlanning: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    distributionTag: string;
    distributionTitle: string;
    distributionDesc: string;
    dailyTag: string;
    dailyTitle: string;
    dailyDesc: string;
  };
  budget: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    monthlyBudget: string;
    planned: string;
    remaining: string;
    utilizedLabel: string;
    bufferLabel: string;
    spendingByMeal: string;
    breakfast: string;
    lunch: string;
    dinner: string;
    snacks: string;
    insightTitle: string;
    insightDesc: string;
  };
  nutrition: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    targetVsActual: string;
    weeklyAccuracy: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    disclaimerTitle: string;
    disclaimerDesc: string;
  };
  progress: {
    badge: string;
    title: string;
    subtitle: string;
    cycleSteps: string[];
    caloriesLabel: string;
    caloriesSub: string;
    proteinLabel: string;
    proteinSub: string;
    budgetLabel: string;
    budgetSub: string;
    consistencyLabel: string;
    consistencySub: string;
  };
  productExperience: {
    badge: string;
    title: string;
    subtitle: string;
    tabs: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
    benefit1: string;
    benefit2: string;
    benefit3: string;
    ctaButton: string;
  };
  personality: {
    badge: string;
    title: string;
    point1: string;
    point2: string;
    point3: string;
    description: string;
    companionTag: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    preLaunchInfo: string;
    planTitle: string;
    planSub: string;
    pricingNoticeTitle: string;
    pricingNoticeDesc: string;
    features: string[];
    ctaButton: string;
    platformInfo: string;
  };
  countdown: {
    badge: string;
    title: string;
    description: string;
    nowAvailableTitle: string;
    nowAvailableDesc: string;
    launchDateLabel: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  finalCta: {
    launchBadge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    footerNotes: string[];
  };
  footer: {
    tagline: string;
    description: string;
    launchInfo: string;
    navTitle: string;
    legalTitle: string;
    disclaimer: string;
    privacy: string;
    terms: string;
    refund: string;
  };
  legal: {
    preLaunchNotice: string;
    privacyTitle: string;
    privacyUpdated: string;
    privacyNoticeBox: string;
    privacySections: { title: string; content: string }[];
    termsTitle: string;
    termsUpdated: string;
    termsNoticeBox: string;
    termsSections: { title: string; content: string }[];
    refundTitle: string;
    refundUpdated: string;
    refundNoticeBox: string;
    refundSections: { title: string; content: string }[];
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      appName: "RATO",
      preLaunch: "Pre-Launch",
      launchDate: "January 1, 2027",
      launchDateFormatted: "January 1, 2027",
      launchDateNumeric: "01.01.2027",
      platformNotice: "Android at launch • iOS in future rollout",
      platformBadge: "Android first",
      tryInstantMeal: "Try Instant Meal",
      seeHowItWorks: "See how it works",
      exploreProduct: "Explore the product",
      exploreInstantMeal: "Explore Instant Meal",
      getLaunchAlert: "Get Launch Alert",
      enterEmailPlaceholder: "Enter your email for launch access",
      subscribedSuccess: "You're on the list! We'll notify you on Jan 1, 2027.",
      noSpamNotice: "No spam. Only an official announcement when RATO goes live on January 1, 2027.",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      currency: "EGP",
      kcalUnit: "kcal",
      proteinUnit: "g Protein",
      switchLangEn: "EN",
      switchLangAr: "عربي",
      switchLangAria: "Switch language",
      backToHome: "Back to Home",
      allRightsReserved: "All rights reserved.",
    },
    nav: {
      features: "Features",
      instantMeal: "Instant Meal",
      howItWorks: "How It Works",
      preview: "Preview",
      pricing: "Pricing",
      faq: "FAQ",
      launchBadge: "Jan 1, 2027",
    },
    hero: {
      launchStatement: "Launching",
      headlineLine1: "YOUR BUDGET.",
      headlineLine2: "YOUR BODY.",
      headlineLine3: "ONE SMARTER CHOICE.",
      supportingCopy:
        "RATO helps you find meals that fit your nutritional needs and your budget.",
      quoteStatement: "There is always a budget to keep your food healthy.",
      androidAtLaunch: "Android at launch",
      trialIncluded: "3-Day Free Trial included",
      noStockNotice: "No stock recipes. Real constraints.",
      mealBudgetLabel: "Meal Budget",
      mealBudgetValue: "30.00 EGP",
      targetGoalsLabel: "Target Goals",
      targetGoalsValue: "700 kcal • 45g Protein",
      generatedMatchBadge: "★ Generated Match",
      sampleMealName: "Chicken Rice Bowl",
      sampleMealDetails: "28.50 EGP • 690 kcal • 44g P",
    },
    problem: {
      badge: "The Daily Friction",
      title: "Every day, you ask three questions.",
      step1Title: "“What should I eat today?”",
      step1Sub: "The daily decision fatigue of finding something satisfying and convenient.",
      step2Title: "“Will it fit my goals?”",
      step2Sub: "Checking protein, counting calories, and worrying about nutritional setbacks.",
      step3Title: "“Can I afford it?”",
      step3Sub: "Inflation, high food prices, and unpredictable meal expenses.",
      resolutionBadge: "The Unified Solution",
      resolutionTitle: "RATO handles all three.",
      resolutionDesc:
        "By analyzing food costs, nutritional values, and available market ingredients simultaneously, RATO turns three stressful decisions into one effortless choice.",
    },
    coreIdea: {
      badge: "Core Philosophy",
      title: "Healthy food shouldn't fight your budget.",
      description:
        "“There is always a budget to keep your food healthy.” RATO turns this principle into a mathematical model, ensuring you never have to sacrifice your nutrition for your wallet or vice-versa.",
      node1Constraint: "Constraint 01",
      node1Title: "Your Budget",
      node1Desc: "e.g. 30 EGP per meal or monthly limits",
      node2Constraint: "Constraint 02",
      node2Title: "Your Nutrition",
      node2Desc: "Calories, protein grams, carbs & fat targets",
      node3Constraint: "Data Foundation",
      node3Title: "Available Foods",
      node3Desc: "Local market ingredients, portions & pricing",
      engineTitle: "RATO BALANCE ENGINE",
      engineBadge: "AI Powered",
      engineDesc: "Dual-constraint combinatorial balancing",
      outputBadge: "Optimal Output",
      outputTitle: "THE RIGHT MEAL",
      outputMeal: "Chicken Rice Bowl",
      outputDesc: "Fits both your spending limit and daily nutritional trajectory.",
    },
    instantMeal: {
      badge: "The Hero Product Experience",
      titleLine1: "Tell us your budget.",
      titleLine2: "We'll handle the rest.",
      description:
        "Choose your budget and nutrition target. RATO finds a meal that fits both. No generic recipes, no unrealistic ingredient lists — just practical, real meals you can make right away.",
      step1Tag: "Step 1: Set Parameters",
      budgetTitle: "What's your meal budget?",
      budgetSub: "Adjust the slider or pick quick presets.",
      mealBudgetLabel: "Meal Budget",
      mealTypeLabel: "Meal Type",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      snack: "Snack",
      targetsTitle: "Your Nutrition Targets",
      caloriesLabel: "Calories",
      proteinLabel: "Protein",
      generateButton: "Generate Meal",
      generatingButton: "Balancing Constraints...",
      footnote: "Built around your body needs and your budget.",
      buildingMeal: "meal...",
      loadingSteps: [
        "Checking your nutrition...",
        "Checking your budget...",
        "Finding suitable foods...",
        "Balancing your options...",
        "Building your meal...",
      ],
      bestMatchBadge: "★ BEST MATCH",
      underBudget: "Under budget",
      priceLabel: "PRICE:",
      mealDesc: "Balanced macro-optimized meal built for",
      targetMatchLabel: "Target Match",
      caloriesMacro: "Calories",
      proteinMacro: "Protein",
      carbsMacro: "Carbs",
      fatMacro: "Fat",
      balancedLabel: "Balanced",
      healthyLabel: "Healthy",
      includedIngredients: "Included Ingredients (budget cap)",
      otherOptionsLabel: "Other great options:",
      feature1Title: "Never overspend",
      feature1Desc: "Meals strictly calculated to stay at or below your specified EGP budget ceiling.",
      feature2Title: "Gram-level accuracy",
      feature2Desc: "Every meal breaks down exact ingredient grams to hit your calorie and protein targets.",
      feature3Title: "Realistic ingredients",
      feature3Desc: "Built using common everyday market items, not exotic hard-to-find supplements.",
    },
    howItWorks: {
      badge: "Simple Workflow",
      title: "How RATO Works",
      subtitle: "Four effortless steps from hunger to a tailored, affordable meal.",
      steps: [
        {
          step: "01",
          title: "Tell RATO about you",
          description: "Enter your health goals, nutritional targets, dietary preferences, and daily routine.",
          highlight: "Personalized profile",
        },
        {
          step: "02",
          title: "Set your budget",
          description: "Choose how much you want to spend per meal or allocate a monthly food spending allowance.",
          highlight: "Strict financial control",
        },
        {
          step: "03",
          title: "RATO finds the balance",
          description: "Our engine evaluates nutrition data, available ingredients, and real pricing to build options that satisfy both sides.",
          highlight: "Dual-constraint engine",
        },
        {
          step: "04",
          title: "Get your meal",
          description: "Receive practical, appetizing meal options with precise portion grams, recipe steps, and exact EGP costs.",
          highlight: "Ready to prepare",
        },
      ],
    },
    aiEngine: {
      badge: "Computational Optimization",
      titleLine1: "Smart enough to",
      titleLine2: "balance both.",
      desc1: "RATO analyzes nutrition, food and pricing data to help find options that fit your needs and your spending limit.",
      desc2: "Rather than generic AI recipes that suggest impossible luxury ingredients or vague measurements, RATO uses disciplined combinatorial algorithms trained on local market grocery prices and macronutrient databases.",
      principle1Title: "Dual-Constraint Solver",
      principle1Desc: "Calculates meal configurations where total price ≤ budget limit and macros align with targets.",
      principle2Title: "Practical Ingredient Matrix",
      principle2Desc: "Grounded in real store staples, portion sizes, and regional pricing.",
      principle3Title: "Transparent Guidance",
      principle3Desc: "Decision support without medical diagnostic claims or health guarantees.",
    },
    mealPlanning: {
      badge: "Comprehensive Scaling",
      titleLine1: "From one meal",
      titleLine2: "to your whole month.",
      subtitle: "Plan individual instant meals or distribute your entire monthly grocery budget across 30 days without guesswork.",
      distributionTag: "Meal Distribution",
      distributionTitle: "Split macros across your day",
      distributionDesc: "Fine-tune nutrient percentages: 25% Breakfast, 30% Lunch, 30% Dinner, 15% Snacks.",
      dailyTag: "Daily Breakdown",
      dailyTitle: "Day-by-day clarity",
      dailyDesc: "Never wonder what's for lunch tomorrow. See upcoming meals with exact costs and prep steps.",
    },
    budget: {
      badge: "Financial Sovereignty",
      titleLine1: "Know where your",
      titleLine2: "food money goes.",
      description: "Plan your meals without losing control of your spending. RATO treats your budget as an integral part of meal planning, not an unrelated afterthought or detached spreadsheet.",
      monthlyBudget: "Monthly Budget",
      planned: "Planned",
      remaining: "Remaining",
      utilizedLabel: "Budget Utilized: 80.7%",
      bufferLabel: "19.3% Buffer Left",
      spendingByMeal: "Spending by Meal Type",
      breakfast: "Breakfast",
      lunch: "Lunch",
      dinner: "Dinner",
      snacks: "Snacks",
      insightTitle: "Smart Food Sourcing",
      insightDesc: "By buying whole staples according to RATO's meal distribution, users typically report spending less on discarded groceries.",
    },
    nutrition: {
      badge: "Personal Macro Tracking",
      titleLine1: "Eat for your",
      titleLine2: "goals.",
      description: "Whether you want to build lean mass, stay energetic, or optimize daily health, RATO calculates macro compositions with transparent target vs. actual tracking.",
      targetVsActual: "Target vs Actual Tracking",
      weeklyAccuracy: "Weekly Accuracy: ~95%",
      calories: "Calories",
      protein: "Protein",
      carbs: "Carbohydrates",
      fat: "Fat",
      disclaimerTitle: "Non-Medical Disclaimer:",
      disclaimerDesc: "RATO is built as a personal nutrition planning assistant. It is not intended to diagnose, cure, or treat any medical condition. Always consult healthcare professionals for clinical dietary requirements.",
    },
    progress: {
      badge: "Continuous Growth",
      title: "See the difference.",
      subtitle: "Small choices become measurable progress. RATO turns your daily eating routine into actionable insights.",
      cycleSteps: ["Eat", "Track", "Learn", "Improve"],
      caloriesLabel: "Calories",
      caloriesSub: "of 2,400 kcal",
      proteinLabel: "Protein",
      proteinSub: "of 150g",
      budgetLabel: "Budget",
      budgetSub: "of 3,000 EGP",
      consistencyLabel: "Consistency",
      consistencySub: "of 7 days",
    },
    productExperience: {
      badge: "Product Architecture",
      title: "Designed for everyday flow.",
      subtitle: "Explore the core views of RATO. Built with an obsessive focus on performance, clarity, and ergonomics.",
      tabs: [
        {
          id: "instant-meal",
          title: "Instant Meal",
          subtitle: "Hero experience",
          description: "Input your budget and calorie/protein targets. Get a tailored meal in seconds.",
        },
        {
          id: "monthly-plan",
          title: "Monthly Plan",
          subtitle: "Calendar overview",
          description: "Plan your meals for 30 days while locking your total budget to avoid overspending.",
        },
        {
          id: "meal-details",
          title: "Meal Details",
          subtitle: "Ingredients & Steps",
          description: "Gram-level ingredient lists, cost breakdown, step-by-step cooking instructions.",
        },
        {
          id: "nutrition-report",
          title: "Nutrition Report",
          subtitle: "Target vs Actual",
          description: "Weekly tracking of calories, protein, carbs, and fats against target benchmarks.",
        },
        {
          id: "progress-tracking",
          title: "Reports & Progress",
          subtitle: "Measurable consistency",
          description: "Monitor budget adherence and macronutrient streaks week after week.",
        },
        {
          id: "meal-distribution",
          title: "Meal Distribution",
          subtitle: "Macro balancing",
          description: "Fine-tune the percentage of your daily nutrients distributed across breakfast, lunch, and dinner.",
        },
        {
          id: "saved-meals",
          title: "Saved Meals",
          subtitle: "Favorites repository",
          description: "Keep your favorite high-protein, budget-friendly meals accessible anytime.",
        },
      ],
      benefit1: "Native Android performance optimized for speed and fluidity",
      benefit2: "Dual-constraint calculations updated in real-time",
      benefit3: "Integrated food and pricing database built for practicality",
      ctaButton: "Explore Instant Meal Feature",
    },
    personality: {
      badge: "Human & Approachable",
      title: "Food planning doesn't have to be complicated.",
      point1: "Less guessing.",
      point2: "Less overspending.",
      point3: "More confidence.",
      description: "Technology should feel encouraging, not intimidating. The RATO companion guides your meal building, celebrates weekly consistency, and keeps you anchored to your financial targets.",
      companionTag: "Your Meal Companion",
    },
    pricing: {
      badge: "Transparent Access",
      title: "Try RATO for 3 days.",
      subtitle: "Explore RATO and see how much easier food planning can become. Full features enabled from day one.",
      preLaunchInfo: "Pre-Launch Information",
      planTitle: "3-DAY FREE TRIAL",
      planSub: "Then premium access after trial.",
      pricingNoticeTitle: "Pricing Model:",
      pricingNoticeDesc: "Final subscription and one-time purchase tiers will be officially announced at launch on January 1, 2027. No hidden fees, no credit card required during pre-registration.",
      features: [
        "Full access to Instant Meal generation",
        "Monthly meal plan calendar & distribution",
        "Nutrition tracking & macronutrient reports",
        "Ingredient pricing & budget cap management",
        "Saved meals and custom food preferences",
      ],
      ctaButton: "Register for Pre-Launch Notice",
      platformInfo: "Android release • January 1, 2027",
    },
    countdown: {
      badge: "The Countdown",
      title: "RATO is almost here.",
      description: "We are polishing the Android launch release for January 1, 2027. Mark your calendar for 01.01.2027.",
      nowAvailableTitle: "RATO is now available!",
      nowAvailableDesc: "The future of food planning and budget management has arrived on Android.",
      launchDateLabel: "Official Launch Date:",
    },
    faq: {
      badge: "Clarity & Answers",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about RATO, our pre-launch timeline, platform support, and trial access.",
      items: [
        {
          question: "What is RATO?",
          answer:
            "RATO is an AI-powered food planning, nutrition, and personal food budget management application. It helps you decide what to eat by seamlessly balancing your available budget, your nutritional targets, personal goals, and available food options in one unified, focused experience.",
        },
        {
          question: "How does RATO choose meals?",
          answer:
            "RATO analyzes your budget constraints, target macronutrients (calories, protein, carbohydrates, fats), meal timing (Breakfast, Lunch, Dinner, Snack), and food preferences. Its balance engine evaluates practical ingredient combinations and portion sizes to generate a meal that fits your exact parameters.",
        },
        {
          question: "Does RATO consider my budget?",
          answer:
            "Yes. Budget is a foundational constraint in RATO rather than an afterthought. You can specify a budget for an instant single meal (e.g. 30 EGP) or set a monthly food spending allowance. RATO tracks ingredient-level costs and planned expenditures so you never lose control of your spending.",
        },
        {
          question: "Does RATO track nutrition?",
          answer:
            "Yes. RATO tracks calories, protein, carbohydrates, and fats, actively comparing your daily intake against your targets. It provides daily breakdowns, weekly summaries, and consistency tracking to support your personal health goals without medical claims.",
        },
        {
          question: "When is RATO launching?",
          answer:
            "RATO is scheduled to launch officially on January 1, 2027 (01.01.2027). You can register your email for our pre-launch announcement on this site.",
        },
        {
          question: "Is RATO free?",
          answer:
            "Every new user receives a comprehensive 3-Day Free Trial to explore RATO's full feature set. Following the trial, ongoing access will be available through premium plans. Final pricing tiers will be announced at launch.",
        },
        {
          question: "What platforms will RATO support?",
          answer:
            "RATO will be available on Android at launch on January 1, 2027. An iOS application is planned for a subsequent release.",
        },
      ],
    },
    finalCta: {
      launchBadge: "RATO launches January 1, 2027",
      titleLine1: "Your next meal",
      titleLine2: "could be smarter.",
      description: "Stop overthinking your meals. Balance your budget and your nutritional targets with a single, intelligent tap.",
      primaryButton: "Get Ready for RATO",
      secondaryButton: "Explore the product",
      footerNotes: [
        "Android release",
        "3-Day Free Trial included",
        "No credit card for pre-registration",
      ],
    },
    footer: {
      tagline: "Your budget. Your body. One smarter choice.",
      description: "RATO helps people decide what to eat by balancing their budget, nutritional targets, personal goals, and available food options.",
      launchInfo: "Launching January 1, 2027 • Android first",
      navTitle: "Navigation",
      legalTitle: "Legal & Transparency",
      disclaimer: "RATO is a nutritional and meal planning decision-support application. It does not provide medical diagnoses or healthcare treatment advice.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      refund: "Refund Policy",
    },
    legal: {
      preLaunchNotice: "Pre-Launch Legal Notice",
      privacyTitle: "Privacy Policy",
      privacyUpdated: "Last updated: September 2026 • Effective Date: January 1, 2027",
      privacyNoticeBox: "Notice: This document represents pre-launch draft terms outlining RATO's privacy architecture. Finalized legal documentation will accompany the official Android release on January 1, 2027.",
      privacySections: [
        {
          title: "1. Overview",
          content: "RATO (“we”, “our”, or “application”) is an AI-powered meal planning and budget management platform. We are committed to maintaining the privacy and security of your personal information, dietary preferences, and spending allocations.",
        },
        {
          title: "2. Information We Collect",
          content: "When using RATO or subscribing to our pre-launch notification list, we may collect: (a) Contact details: Email address provided during pre-registration; (b) Nutritional parameters: Caloric targets, macronutrient goals (protein, carbs, fat), dietary restrictions, and meal timing preferences; (c) Budget preferences: Meal budget caps and monthly food spending allocations entered by the user.",
        },
        {
          title: "3. How We Use Information",
          content: "Your nutritional and financial parameters are strictly utilized to compute personalized meal combinations through RATO's dual-constraint balancing engine. We do not sell your personal data or provide your dietary profiles to third-party advertising brokers.",
        },
        {
          title: "4. Health & Medical Data Scope",
          content: "RATO is an everyday food planning and budgeting decision-support tool. RATO does not solicit, collect, or process Protected Health Information (PHI) or medical records. Any nutritional calculations are mathematical estimates intended for general wellness and budgeting purposes only.",
        },
        {
          title: "5. Contact",
          content: "For inquiries regarding this pre-launch privacy framework, please reach out via our official communication channels or visit RATO.",
        },
      ],
      termsTitle: "Terms & Conditions",
      termsUpdated: "Effective Date: January 1, 2027 • Pre-Launch Version",
      termsNoticeBox: "Notice: This document represents draft terms governing RATO pre-launch previews and future software access. Formal binding terms will be instituted at Android launch.",
      termsSections: [
        {
          title: "1. Service Nature",
          content: "RATO provides algorithmic meal planning, recipe portion estimation, and food budget calculation. The application operates solely as an informational decision-support utility.",
        },
        {
          title: "2. Medical & Health Disclaimer",
          content: "RATO is not a medical provider and does not provide clinical healthcare, nutritional therapy, or medical diagnosis. All caloric and macronutrient recommendations are calculated from general reference values. Users with specific health conditions, allergies, or metabolic requirements must consult certified medical professionals before altering their diet.",
        },
        {
          title: "3. Pricing & 3-Day Free Trial",
          content: "New registered accounts are eligible for a 3-Day Free Trial upon official launch. Following the conclusion of the free trial period, ongoing access will require a paid subscription or license. Specific tier rates will be announced prior to launch.",
        },
        {
          title: "4. Intellectual Property",
          content: "All trademarks, logos, visual assets, software code, and interface designs associated with RATO remain the exclusive property of RATO.",
        },
        {
          title: "5. Platform Availability",
          content: "RATO will debut primarily on the Android platform on January 1, 2027. Future platform availability (including iOS) will be announced separately.",
        },
      ],
      refundTitle: "Refund & Cancellation Policy",
      refundUpdated: "Effective Date: January 1, 2027 • Pre-Launch Information",
      refundNoticeBox: "Pre-Launch Notice: No payments or financial transactions are currently processed through this website. This policy describes our customer satisfaction framework upon commercial launch.",
      refundSections: [
        {
          title: "1. 3-Day Free Trial Policy",
          content: "RATO provides every registered user a complimentary 3-Day Free Trial upon the official Android release. During this trial period, users can cancel their account at any time without incurring any subscription fees.",
        },
        {
          title: "2. Subscription Cancellations",
          content: "Users may cancel recurring subscriptions at any time via their Google Play Store account settings or directly within RATO Account Settings. Upon cancellation, access remains active until the expiration of the current billing cycle.",
        },
        {
          title: "3. Refund Consideration",
          content: "Refund requests submitted through standard app store channels (e.g. Google Play support policies) will be evaluated based on platform guidelines. We strive to handle billing concerns fairly and promptly.",
        },
        {
          title: "4. Policy Updates",
          content: "This draft policy will be updated with jurisdiction-specific consumer protection terms before public launch on January 1, 2027.",
        },
      ],
    },
  },
  ar: {
    common: {
      appName: "RATO",
      preLaunch: "قبل الإطلاق",
      launchDate: "1 يناير 2027",
      launchDateFormatted: "1 يناير 2027",
      launchDateNumeric: "01.01.2027",
      platformNotice: "أندرويد عند الإطلاق • iOS في مرحلة لاحقة",
      platformBadge: "أندرويد أولاً",
      tryInstantMeal: "جرّب الوجبة الفورية",
      seeHowItWorks: "شاهد طريقة العمل",
      exploreProduct: "استكشف المنتج",
      exploreInstantMeal: "استكشف الوجبة الفورية",
      getLaunchAlert: "احصل على تنبيه الإطلاق",
      enterEmailPlaceholder: "أدخل بريدك الإلكتروني لتصلك دعوة الإطلاق",
      subscribedSuccess: "تم تسجيلك بنجاح! سنقوم بإشعارك يوم 1 يناير 2027.",
      noSpamNotice: "بدون أي رسائل مزعجة. فقط إشعار رسمي فوري لحظة توفر RATO في 1 يناير 2027.",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      currency: "EGP",
      kcalUnit: "سعرة",
      proteinUnit: "جم بروتين",
      switchLangEn: "EN",
      switchLangAr: "عربي",
      switchLangAria: "تغيير اللغة",
      backToHome: "العودة للرئيسية",
      allRightsReserved: "جميع الحقوق محفوظة.",
    },
    nav: {
      features: "المميزات",
      instantMeal: "الوجبة الفورية",
      howItWorks: "طريقة العمل",
      preview: "معاينة التطبيق",
      pricing: "الباقات والتجربة",
      faq: "الأسئلة الشائعة",
      launchBadge: "1 يناير 2027",
    },
    hero: {
      launchStatement: "موعد الإطلاق",
      headlineLine1: "ميزانيتك.",
      headlineLine2: "احتياجات جسمك.",
      headlineLine3: "اختيار أذكى.",
      supportingCopy:
        "RATO يساعدك في اختيار وجبات يومية تجمع بين احتياجاتك الغذائية وميزانيتك بدقة متناهية.",
      quoteStatement: "الأكل الصحي مش لازم يكون ضد ميزانيتك.",
      androidAtLaunch: "أندرويد عند الإطلاق",
      trialIncluded: "تجربة مجانية لمدة ٣ أيام",
      noStockNotice: "أكل حقيقي. مكونات واقعية. بلا تعقيد.",
      mealBudgetLabel: "ميزانية الوجبة",
      mealBudgetValue: "30.00 EGP",
      targetGoalsLabel: "الأهداف الغذائية",
      targetGoalsValue: "700 سعرة • 45 جم بروتين",
      generatedMatchBadge: "★ المطابقة المثالية",
      sampleMealName: "طبق دجاج بالأرز والصلصة",
      sampleMealDetails: "28.50 EGP • 690 سعرة • 44 جم بروتين",
    },
    problem: {
      badge: "الحيرة اليومية",
      title: "كل يوم بتسأل نفسك ٣ أسئلة.",
      step1Title: "«هاكل إيه النهارده؟»",
      step1Sub: "إرهاق اتخاذ القرار اليومي بين رغبتك في أكلة شهية وسريعة ومتاحة.",
      step2Title: "«هل الوجبة مناسبة لدايتي؟»",
      step2Sub: "حساب البروتين، وتتبع السعرات، والخوف من التخبيص اللي يبوظ تعبك.",
      step3Title: "«طب هتكلفني كام؟»",
      step3Sub: "ارتفاع أسعار الأكل ومصاريف اليوم اللي بتخرج عن السيطرة.",
      resolutionBadge: "الحل الذكي المتكامل",
      resolutionTitle: "RATO يتولى الإجابة عن الثلاثة.",
      resolutionDesc:
        "من خلال معالجة أسعار الأغذية المحلية، وقيمها الغذائية، ومكونات السوق المتاحة في نفس اللحظة، RATO يحول ٣ قرارات محيرة ومقلقة لاختيار واحد سهل ومضمون.",
    },
    coreIdea: {
      badge: "فلسفة RATO",
      title: "الأكل الصحي مش لازم يكون ضد ميزانيتك.",
      description:
        "«هناك دائماً ميزانية تحافظ بها على صحتك». حوّل RATO هذا المبدأ إلى معادلة خوارزمية ذكية تضمن لك ألا تضحي بتغذيتك من أجل محفظتك، أو العكس.",
      node1Constraint: "المحدد الأول",
      node1Title: "ميزانيتك المتاحة",
      node1Desc: "مثلاً: 30 EGP للوجبة أو ميزانية شهرية محددة",
      node2Constraint: "المحدد الثاني",
      node2Title: "احتياجات جسمك",
      node2Desc: "السعرات، جرامات البروتين، الكاربوهيدرات، والدهون",
      node3Constraint: "قاعدة البيانات الحية",
      node3Title: "المكونات المتاحة",
      node3Desc: "أسعار السلع في السوق المحلي، والكميات الواقعية",
      engineTitle: "محرك الموازنة الذكي من RATO",
      engineBadge: "ذكاء اصطناعي",
      engineDesc: "موازنة تجميعية ثنائية الشروط في أجزاء من الثانية",
      outputBadge: "النتيجة المثالية",
      outputTitle: "الوجبة المناسبة تماماً",
      outputMeal: "طبق أرز مع الدجاج المتوازن",
      outputDesc: "تناسب سقف ميزانيتك المالي وأهدافك الصحية في آنٍ واحد.",
    },
    instantMeal: {
      badge: "التجربة الأساسية في التطبيق",
      titleLine1: "قل لنا ميزانيتك.",
      titleLine2: "واترك الباقي على RATO.",
      description:
        "حدد ميزانية وجبتك وأهدافك الغذائية، وسيقوم RATO باقتراح وجبة مناسبة تماماً للاثنين معاً. بدون وصفات خيالية أو مكونات نادرة، بل وجبات عملية يمكنك تحضيرها فوراً.",
      step1Tag: "الخطوة ١: حدد المعايير",
      budgetTitle: "ما هي ميزانية وجبتك؟",
      budgetSub: "حرك المؤشر أو اختر من المبالغ السريعة.",
      mealBudgetLabel: "ميزانية الوجبة",
      mealTypeLabel: "نوع الوجبة",
      breakfast: "إفطار",
      lunch: "غداء",
      dinner: "عشاء",
      snack: "سناك",
      targetsTitle: "أهدافك الغذائية المطلوبة",
      caloriesLabel: "السعرات",
      proteinLabel: "البروتين",
      generateButton: "توليد الوجبة الآن",
      generatingButton: "جارٍ موازنة الخيارات...",
      footnote: "مصممة حول احتياجات جسمك وميزانيتك المتاحة.",
      buildingMeal: "وجبتك...",
      loadingSteps: [
        "جارٍ فحص احتياجاتك الغذائية...",
        "جارٍ مطابقة سقف ميزانيتك...",
        "جارٍ البحث في المكونات المتاحة...",
        "جارٍ موازنة الخيارات وحساب النسب...",
        "جارٍ بناء وجبتك المتوازنة...",
      ],
      bestMatchBadge: "★ أفضل مطابقة",
      underBudget: "أقل من الميزانية",
      priceLabel: "السعر:",
      mealDesc: "وجبة متوازنة ومحسوبة الماكروز مصممة لوجبة",
      targetMatchLabel: "نسبة المطابقة",
      caloriesMacro: "سعرة",
      proteinMacro: "بروتين",
      carbsMacro: "كارب",
      fatMacro: "دهون",
      balancedLabel: "متوازن",
      healthyLabel: "صحي",
      includedIngredients: "المكونات والجرامات المحددة (ضمن الميزانية)",
      otherOptionsLabel: "اقتراحات ممتازة أخرى:",
      feature1Title: "لن تتجاوز الميزانية",
      feature1Desc: "الوجبات محسوبة بدقة لتكون مساوية أو أقل من الحد المالي الذي وضعته بالجنية.",
      feature2Title: "دقة بالجرام لكل مكون",
      feature2Desc: "كل وجبة تشمل أوزان المكونات بدقة لتضمن وصولك لأهداف البروتين والسعرات.",
      feature3Title: "مكونات من بيئتك وسوقك",
      feature3Desc: "مبنية على السلع المعتادة والمتاحة في المتاجر المحلية، بلا منتجات معقدة.",
    },
    howItWorks: {
      badge: "خطوات واضحة وسريعة",
      title: "كيف يعمل RATO؟",
      subtitle: "أربع خطوات بسيطة تنقلك من التفكير والحيرة إلى وجبة لذيذة ومحسوبة.",
      steps: [
        {
          step: "01",
          title: "أخبر RATO عنك",
          description: "حدد أهدافك الصحية، وتفضيلات طعامك، واحتياجات جسمك من السعرات والبروتين.",
          highlight: "ملف شخصي مخصص",
        },
        {
          step: "02",
          title: "حدد ميزانيتك",
          description: "اختر المبلغ الذي تريد إنفاقه على وجبتك الحالية أو خصص ميزانية طعامك الشهرية.",
          highlight: "تحكم مالي صارم",
        },
        {
          step: "03",
          title: "RATO يوازن المعادلة",
          description: "يقوم محركنا بتحليل القيم الغذائية والمكونات والأسعار لبناء خيارات تحقق التوازن التام.",
          highlight: "محرك ثنائي الشروط",
        },
        {
          step: "04",
          title: "احصل على وجبتك فوراً",
          description: "استلم مقادير وجبتك بالجرامات المحددة، مع خطوات الإعداد وتكلفتها الدقيقة بالجنيه.",
          highlight: "جاهزة للتحضير",
        },
      ],
    },
    aiEngine: {
      badge: "معادلة ذكية بدون مبالغات",
      titleLine1: "ذكي بما يكفي",
      titleLine2: "ليوازن بين الاثنين.",
      desc1: "يقوم RATO بتحليل بيانات التغذية والمكونات وأسعار السوق لمساعدتك في إيجاد خيارات تناسب احتياجات جسمك وحدود إنفاقك.",
      desc2: "بدلاً من توليد وصفات عشوائية تقترح مكونات فاخرة باهظة أو كميات غامضة، يعتمد RATO على خوارزميات توافقية منضبطة مدربة على أسعار الأسواق المحلية وقواعد بيانات الماكروز المعتمدة.",
      principle1Title: "محلل الشروط الثنائية",
      principle1Desc: "يحسب تكوينات الوجبات بحيث لا يتعدى السعر الإجمالي ميزانيتك وتتطابق العناصر مع أهدافك.",
      principle2Title: "مصفوفة مكونات واقعية",
      principle2Desc: "مرتكزة على السلع الأساسية في المتاجر، وأحجام الحصص الطبيعية، والأسعار الواقعية.",
      principle3Title: "إرشاد شفاف وأمين",
      principle3Desc: "أداة ذكية لدعم القرار والتخطيط دون أي ادعاءات تشخيصية طبية أو ضمانات علاجية.",
    },
    mealPlanning: {
      badge: "تخطيط شامل ومرن",
      titleLine1: "من وجبة واحدة",
      titleLine2: "إلى خطة شهرك بالكامل.",
      subtitle: "خطط وجبتك اللحظية الفورية، أو وزّع ميزانية طعامك الشهرية بالكامل على ٣٠ يوماً بلا عشوائية.",
      distributionTag: "توزيع الوجبات",
      distributionTitle: "قسّم الماكروز على مدار يومك",
      distributionDesc: "عدّل نسب العناصر بسهولة: 25% فطور، 30% غداء، 30% عشاء، 15% سناكس.",
      dailyTag: "تفصيل يومي منظم",
      dailyTitle: "وضوح لكل يوم بيومه",
      dailyDesc: "لن تسأل نفسك غداً عما ستأكله. اعرف مقدماً وجباتك وتكاليفها وطرق تحضيرها.",
    },
    budget: {
      badge: "سيادة وتحكم في ميزانيتك",
      titleLine1: "اعرف أين تذهب",
      titleLine2: "ميزانية طعامك.",
      description: "خطط وجباتك دون أن تفقد السيطرة على مصروفك. RATO يتعامل مع الميزانية كجزء أصيل من قرار الطعام وليس كأداة مالية منفصلة أو جدول محاسبي ممل.",
      monthlyBudget: "الميزانية الشهرية",
      planned: "المخطط إنفاقه",
      remaining: "المتبقي بالمحفظة",
      utilizedLabel: "المستهلك من الميزانية: 80.7%",
      bufferLabel: "متبقي أمان: 19.3%",
      spendingByMeal: "الإنفاق حسب نوع الوجبة",
      breakfast: "إفطار",
      lunch: "غداء",
      dinner: "عشاء",
      snacks: "سناكس",
      insightTitle: "توفير ذكي للمكونات",
      insightDesc: "شراء المكونات الصحيحة وتوزيعها وفق خطة RATO يقلل بشكل ملموس من الطعام المهدر ويوفر ميزانيتك.",
    },
    nutrition: {
      badge: "تتبع غذائي شخصي دقيق",
      titleLine1: "تناول طعامك",
      titleLine2: "لتحقيق أهدافك.",
      description: "سواء كان هدفك بناء عضلات، أو الحفاظ على طاقتك وحيويتك، أو الحفاظ على وزن صحي، يحسب RATO نسب العناصر مع مقارنة مستمرة بين المستهدف والفعلي.",
      targetVsActual: "مقارنة المستهدف مقابل الفعلي",
      weeklyAccuracy: "دقة التتبع الأسبوعي: ~95%",
      calories: "السعرات الحرارية",
      protein: "البروتين",
      carbs: "الكاربوهيدرات",
      fat: "الدهون الصحية",
      disclaimerTitle: "إخلاء مسؤولية غير طبي:",
      disclaimerDesc: "تم تصميم RATO كمساعد شخصي لتخطيط التغذية والوجبات. التطبيق غير مخصص لتشخيص أو علاج أي مرض. يرجى دائماً استشارة المتخصصين الطبيين للأنظمة العلاجية.",
    },
    progress: {
      badge: "تطور مستمر وواضح",
      title: "شاهد الفرق بنفسك.",
      subtitle: "الاختيارات الصغيرة المتكررة تصنع فارقاً حقيقياً قابلاً للقياس. RATO يحول روتين طعامك اليومي إلى إحصائيات مشجعة.",
      cycleSteps: ["كُل", "تتبّع", "تعلّم", "تطوّر"],
      caloriesLabel: "السعرات",
      caloriesSub: "من 2,400 سعرة",
      proteinLabel: "البروتين",
      proteinSub: "من 150 جم",
      budgetLabel: "الميزانية",
      budgetSub: "من 3,000 EGP",
      consistencyLabel: "الاستمرارية",
      consistencySub: "خلال 7 أيام",
    },
    productExperience: {
      badge: "تصميم واجهة متقن",
      title: "مصمم لانسيابية يومك.",
      subtitle: "استكشف الشاشات والواجهات الرئيسية في RATO. مبنية بتركيز فائق على الأداء السريع والوضوح وسهولة الاستخدام.",
      tabs: [
        {
          id: "instant-meal",
          title: "الوجبة الفورية",
          subtitle: "التجربة الأساسية",
          description: "أدخل ميزانيتك وهدفك من السعرات والبروتين، واحصل على وجبة مخصصة في ثوانٍ.",
        },
        {
          id: "monthly-plan",
          title: "الخطة الشهرية",
          subtitle: "تقويم ٣٠ يوماً",
          description: "خطط وجباتك لثلاثين يوماً مع تثبيت ميزانيتك الإجمالية لتفادي أي زيادة غير محسوبة.",
        },
        {
          id: "meal-details",
          title: "تفاصيل الوجبة",
          subtitle: "المكونات والخطوات",
          description: "جرامات دقيقة لكل مكوّن، وتفصيل تكلفته بالقرش، مع خطوات الإعداد خطوة بخطوة.",
        },
        {
          id: "nutrition-report",
          title: "تقرير التغذية",
          subtitle: "المستهدف والفعلي",
          description: "متابعة أسبوعية للسعرات والبروتين والكارب والدهون مقارنة بأهدافك المحددة.",
        },
        {
          id: "progress-tracking",
          title: "التقارير والتقدم",
          subtitle: "استمرارية قابلة للقياس",
          description: "راقب التزامك بالميزانية وسلاسل استمرارك في تحقيق الماكروز أسبوعاً بعد أسبوع.",
        },
        {
          id: "meal-distribution",
          title: "توزيع الوجبات",
          subtitle: "موازنة نسب اليوم",
          description: "اضبط نسب المغذيات اليومية الموزعة بين الفطور والغداء والعشاء والسناك بكل مرونة.",
        },
        {
          id: "saved-meals",
          title: "الوجبات المحفوظة",
          subtitle: "قائمة وجباتك المفضلة",
          description: "احتفظ بوجباتك المفضلة عالية البروتين والمناسبة لميزانيتك لتصل إليها في أي وقت.",
        },
      ],
      benefit1: "أداء أندرويد فائق السرعة والانسيابية بأعلى معايير الاستجابة",
      benefit2: "حسابات دقيقة ثنائية الشروط تُحدث لحظياً في الواجهة",
      benefit3: "قاعدة بيانات واقعية لأسعار السلع والأطعمة المتاحة محلياً",
      ctaButton: "جرّب ميزة الوجبة الفورية",
    },
    personality: {
      badge: "تجربة إنسانية وقريبة منك",
      title: "تخطيط طعامك لا يجب أن يكون معقداً.",
      point1: "تخمين أقل.",
      point2: "إنفاق زائد أقل.",
      point3: "ثقة أكبر.",
      description: "التكنولوجيا يجب أن تكون مشجعة لا مخيفة. رفيق RATO يرافقك في بناء وجباتك، ويحتفي باستمراريتك الأسبوعية، ويحافظ على أمان ميزانيتك المالية.",
      companionTag: "رفيق وجباتك اليومي",
    },
    pricing: {
      badge: "وضوح وشفافية تامة",
      title: "جرّب RATO لمدة ٣ أيام.",
      subtitle: "استكشف RATO واكتشف كيف يصبح قرار وجبتك اليومية أسهل وأوفر بكثير. كل المميزات مفتوحة من اليوم الأول.",
      preLaunchInfo: "معلومات ما قبل الإطلاق",
      planTitle: "تجربة مجانية لمدة ٣ أيام",
      planSub: "ثم اشتراك مميز بعد انتهاء التجربة.",
      pricingNoticeTitle: "نموذج التسعير:",
      pricingNoticeDesc: "سيتم الإعلان الرسمي عن أسعار الباقات والاشتراكات عند الإطلاق في 1 يناير 2027. لا توجد أي رسوم خفية، ولا حاجة لبطاقة دفع خلال فترة التسجيل المبكر.",
      features: [
        "وصول كامل لتوليد الوجبات الفورية اللحظية",
        "تقويم الخطة الشهرية وتوزيع الوجبات اليومية",
        "تتبع التغذية الدقيق وتقارير الماكروز الأسبوعية",
        "إدارة سقف الميزانية وحساب تكلفة المكونات",
        "حفظ الوجبات المفضلة وتخصيص الأطعمة",
      ],
      ctaButton: "سجّل لتصلك دعوة الإطلاق المبكر",
      platformInfo: "إصدار أندرويد • 1 يناير 2027",
    },
    countdown: {
      badge: "العد التنازلي",
      title: "RATO على وشك الانطلاق.",
      description: "نحن نضع اللمسات الأخيرة على تطبيق أندرويد ليكون جاهزاً في 1 يناير 2027. احفظ هذا التاريخ: 01.01.2027.",
      nowAvailableTitle: "تطبيق RATO متاح الآن!",
      nowAvailableDesc: "انطلق المستقبل الذكي لتخطيط الطعام وضبط الميزانية على هواتف أندرويد.",
      launchDateLabel: "تاريخ الإطلاق الرسمي:",
    },
    faq: {
      badge: "إجابات واضحة وشفافة",
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تود معرفته عن RATO، وموعد إطلاقه، والأنظمة المدعومة، وفترة التجربة المجانية.",
      items: [
        {
          question: "ما هو تطبيق RATO؟",
          answer:
            "RATO هو تطبيق ذكي لتخطيط الطعام، والتغذية، وإدارة ميزانية الأكل الشخصية. يساعدك التطبيق في تحديد ما تأكله يومياً بموازنة ميزانيتك المتاحة، وأهدافك الغذائية، وتفضيلاتك الشخصية، والمكونات المتاحة في تجربة واحدة مركزة ومريحة.",
        },
        {
          question: "كيف يختار RATO وجبات الطعام؟",
          answer:
            "يحلل RATO سقف ميزانيتك المحددة، واحتياجاتك من الماكروز (السعرات، البروتين، الكارب، الدهون)، وتوقيت الوجبة (فطور، غداء، عشاء، سناك)، وما تفضل تناوله. ثم يقيّم خوارزمياً توليفات المكونات وأوزانها لاقتراح وجبة تطابق شروطك بدقة.",
        },
        {
          question: "هل يأخذ RATO ميزانيتي في الاعتبار حقاً؟",
          answer:
            "نعم، الميزانية في RATO ركيزة أساسية وليست فكرة ثانوية. يمكنك تحديد ميزانية لوجبة فورية واحدة (مثل 30 جنيهاً) أو وضع ميزانية شهرية لمصروف الطعام بالكامل. يتتبع التطبيق تكلفة كل جرام بدقة لتظل دائماً متحكماً في مصاريفك.",
        },
        {
          question: "هل يتتبع RATO قيم التغذية والماكروز؟",
          answer:
            "نعم، يتتبع RATO السعرات، والبروتين، والكاربوهيدرات، والدهون، ويقارن استهلاكك الفعلي يومياً بأهدافك. ويمنحك تقارير أسبوعية وشهرية توضح مدى التزامك واستمراريتك لدعم أهدافك الرياضية والصحية.",
        },
        {
          question: "متى سينطلق تطبيق RATO رسمياً؟",
          answer:
            "من المقرر إطلاق RATO رسمياً في 1 يناير 2027 (01.01.2027). يمكنك تسجيل بريدك الإلكتروني لتكون أول من يعلم فور الإطلاق.",
        },
        {
          question: "هل تطبيق RATO مجاني؟",
          answer:
            "يحصل كل مستخدم جديد على تجربة مجانية كاملة المزايا لمدة ٣ أيام فور الإطلاق. بعد التجربة، يستمر الوصول للتطبيق عبر اشتراكات مدفوعة، وسيتم الكشف عن تفاصيل الأسعار والباقات عند الإطلاق الرسمي.",
        },
        {
          question: "ما هي المنصات وأنظمة التشغيل المدعومة؟",
          answer:
            "سيتوفر RATO على نظام أندرويد (Android) كمنصة أولى عند الإطلاق في 1 يناير 2027، بينما يتم التخطيط لإطلاق نسخة نظام iOS في مرحلة لاحقة.",
        },
      ],
    },
    finalCta: {
      launchBadge: "موعد الإطلاق: 1 يناير 2027",
      titleLine1: "وجبتك القادمة",
      titleLine2: "يمكن أن تكون أذكى.",
      description: "توقف عن الحيرة اليومية والقلق بشأن التكلفة أو الدايت. وازن بين ميزانيتك واحتياجات جسمك بضغطة واحدة ذكية وموثوقة.",
      primaryButton: "استعد لإنطلاق RATO",
      secondaryButton: "استكشف مميزات التطبيق",
      footerNotes: [
        "إصدار أندرويد الأول",
        "تجربة مجانية لمدة ٣ أيام",
        "لا يلزم بطاقة دفع للتسجيل المبكر",
      ],
    },
    footer: {
      tagline: "ميزانيتك. احتياجات جسمك. اختيار أذكى.",
      description: "RATO يساعد الناس على حسم قرار وجباتهم اليومية بموازنة ميزانيتهم المتاحة، وأهدافهم الغذائية، وأطعمتهم المفضلة.",
      launchInfo: "ينطلق في 1 يناير 2027 • أندرويد أولاً",
      navTitle: "روابط سريعة",
      legalTitle: "الشفافية والسياسات",
      disclaimer: "RATO هو تطبيق مساعد لدعم قرارات التخطيط الغذائي والميزانية الشخصية، ولا يقدم أي تشخيصات طبية أو نصائح علاجية.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      refund: "سياسة الاسترداد والإلغاء",
    },
    legal: {
      preLaunchNotice: "إشعار قانوني لفترة ما قبل الإطلاق",
      privacyTitle: "سياسة الخصوصية",
      privacyUpdated: "آخر تحديث: سبتمبر 2026 • تاريخ السريان: 1 يناير 2027",
      privacyNoticeBox: "إشعار: تمثل هذه الوثيقة مسوّدة تمهيدية توضح معايير الخصوصية وحماية البيانات في تطبيق RATO قبل الإطلاق الرسمي. ستدخل الصيغة القانونية النهائية حيز التنفيذ مع إطلاق التطبيق على أندرويد في 1 يناير 2027.",
      privacySections: [
        {
          title: "1. نظرة عامة",
          content: "يعد تطبيق RATO منصة ذكية لتخطيط الوجبات وإدارة ميزانية الطعام الشخصية. نحن نلتزم بأعلى معايير حماية الخصوصية وأمان بياناتك، وتفضيلاتك الغذائية، وسجلات إنفاقك المالي.",
        },
        {
          title: "2. البيانات التي نجمعها",
          content: "عند استخدام موقع RATO أو التسجيل في قائمة الإطلاق المبكر، قد نجمع: (أ) معلومات التواصل: عنوان البريد الإلكتروني المدخل؛ (ب) المعايير الغذائية: أهداف السعرات، نسب الماكروز (بروتين، كارب، دهون)، والمحددات الغذائية؛ (ج) معايير الميزانية: الحد الأقصى لتكلفة الوجبة أو المخصص الشهري المدخل من قِبل المستخدم.",
        },
        {
          title: "3. كيف نستخدم هذه البيانات",
          content: "تُستخدم بياناتك الغذائية والمالية حصرياً لتوليد واقتراح وجبات مخصصة متطابقة مع شروطك عبر محرك الموازنة الذكي الخاص بـ RATO. نحن لا نقوم ببيع بياناتك الشخصية ولا نشارك تفضيلاتك مع جهات إعلانية وسيطة.",
        },
        {
          title: "4. نطاق البيانات الصحية والطبية",
          content: "تطبيق RATO أداة عملية للمساعدة في التخطيط اليومي للطعام والميزانية، ولا يجمع أو يعالج أي سجلات طبية رسمية أو معلومات صحية تشخيصية. الحسابات الغذائية هي تقديرات حسابية للأغراض العامة فقط.",
        },
        {
          title: "5. التواصل والاستفسار",
          content: "لأية أسئلة حول إطار الخصوصية، يرجى التواصل معنا عبر قنوات الاتصال الرسمية الخاصة بتطبيق RATO.",
        },
      ],
      termsTitle: "الشروط والأحكام",
      termsUpdated: "تاريخ السريان: 1 يناير 2027 • مسودة ما قبل الإطلاق",
      termsNoticeBox: "إشعار: تحكم هذه الشروط التمهيدية استخدام المعاينات المسبقة لتطبيق RATO. ستصدر الصيغة المعتمدة رسمياً مع موعد الإطلاق على أندرويد.",
      termsSections: [
        {
          title: "1. طبيعة الخدمة",
          content: "يقدم RATO حسابات خوارزمية لتخطيط الوجبات وتقدير كميات المكونات وضبط ميزانيتها، وتعمل الخدمة كأداة إرشادية لدعم اتخاذ القرار الشخصي فقط.",
        },
        {
          title: "2. إخلاء المسؤولية الصحية والطبية",
          content: "RATO ليس جهة طبية ولا يقدم استشارات علاجية أو حميات طبية سريرية. كافة أرقام السعرات والماكروز هي إرشادات عامة مبنية على مراجع تغذية معتمدة. يجب على أصحاب الحالات الصحية أو الحساسيات استشارة أطبائهم المختصين قبل تغيير نظامهم الغذائي.",
        },
        {
          title: "3. التسعير والتجربة المجانية",
          content: "يحصل كل حساب جديد على تجربة مجانية لمدة ٣ أيام عند الإطلاق الرسمي. بعد انتهاء هذه المدة، يتطلب استمرار الخدمة الاشتراك في إحدى الباقات المدفوعة التي سيُعلن عنها رسمياً قبل موعد الإطلاق.",
        },
        {
          title: "4. الملكية الفكرية",
          content: "كافة العلامات التجارية، والشعارات، والواجهات، والشفرات البرمجية، والهوية البصرية المرتبطة بـ RATO هي ملكية حصرية للتطبيق ومحمية بموجب القوانين المنظمة.",
        },
        {
          title: "5. توفر النظام والمنصات",
          content: "سينطلق RATO أساساً على منصة أندرويد (Android) في 1 يناير 2027، وسيتم الإعلان عن توفره على المنصات الأخرى (مثل iOS) في تحديثات لاحقة.",
        },
      ],
      refundTitle: "سياسة الاسترداد والإلغاء",
      refundUpdated: "تاريخ السريان: 1 يناير 2027 • معلومات ما قبل الإطلاق",
      refundNoticeBox: "إشعار: لا تتم معالجة أي مدفوعات مالية أو اشتراكات حية حالياً عبر هذا الموقع. توضح هذه السياسة حقوق العميل بعد التدشين التجاري.",
      refundSections: [
        {
          title: "1. سياسة التجربة المجانية لمدة ٣ أيام",
          content: "يمنح RATO كل مستخدم جديد تجربة مجانية لمدة ٣ أيام فور تدشين تطبيق أندرويد. خلال هذه الفترة، يمكن للمستخدم إلغاء حسابه في أي وقت دون خصم أي مبالغ مالية.",
        },
        {
          title: "2. إلغاء الاشتراكات الدورية",
          content: "يمكن للمستخدم إلغاء التجديد التلقائي للاشتراك في أي وقت عبر إعدادات حسابه في متجر Google Play أو من داخل إعدادات تطبيق RATO مباشرة، ويستمر الوصول حتى نهاية الدورة المدفوعة الحالية.",
        },
        {
          title: "3. طلبات الاسترداد المالي",
          content: "تخضع طلبات استرداد الأموال للسياسات والقواعد المعتمدة في متجر التطبيقات (مثل سياسات Google Play)، ونحرص دائماً على التعامل مع استفسارات المشتركين بعدالة وسرعة.",
        },
        {
          title: "4. تحديثات السياسة",
          content: "سيتم تحديث هذه المسوّدة ببنود حماية المستهلك المعتمدة في كل دولة قبل الموعد النهائي للإطلاق في 1 يناير 2027.",
        },
      ],
    },
  },
};
