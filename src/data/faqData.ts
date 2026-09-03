export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
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
];
