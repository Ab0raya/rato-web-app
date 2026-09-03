export interface GeneratedMeal {
  id: string;
  name: string;
  price: number;
  currency: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  matchScore: number;
  ingredients: { name: string; amount: string; cost?: number }[];
  targetDiff: { calories: number; protein: number };
  badge?: string;
}

export const sampleMeals: GeneratedMeal[] = [
  {
    id: "chicken-rice-bowl",
    name: "Chicken Rice Bowl",
    price: 28.5,
    currency: "EGP",
    calories: 690,
    protein: 44,
    carbs: 88,
    fat: 19,
    matchScore: 88.5,
    ingredients: [
      { name: "Chicken breast", amount: "100g", cost: 18 },
      { name: "Rice", amount: "150g", cost: 5 },
      { name: "Fresh tomato", amount: "50g", cost: 2 },
      { name: "Olive oil", amount: "5ml", cost: 1.5 },
    ],
    targetDiff: { calories: -10, protein: -1 },
    badge: "BEST MATCH",
  },
  {
    id: "beef-pasta-bowl",
    name: "Beef Pasta Bowl",
    price: 29.25,
    currency: "EGP",
    calories: 685,
    protein: 45,
    carbs: 82,
    fat: 22,
    matchScore: 91.0,
    ingredients: [
      { name: "Lean beef", amount: "90g", cost: 19 },
      { name: "Whole wheat pasta", amount: "120g", cost: 6 },
      { name: "Tomato sauce", amount: "60g", cost: 2.75 },
      { name: "Herbs & spices", amount: "pinch", cost: 1.5 },
    ],
    targetDiff: { calories: -15, protein: 0 },
  },
  {
    id: "tuna-quinoa-bowl",
    name: "Tuna Quinoa Bowl",
    price: 28.75,
    currency: "EGP",
    calories: 696,
    protein: 43,
    carbs: 79,
    fat: 24,
    matchScore: 89.2,
    ingredients: [
      { name: "Canned tuna in water", amount: "120g", cost: 17.5 },
      { name: "Cooked quinoa", amount: "140g", cost: 7 },
      { name: "Mixed greens", amount: "80g", cost: 2.5 },
      { name: "Lemon vinaigrette", amount: "10ml", cost: 1.75 },
    ],
    targetDiff: { calories: -4, protein: -2 },
  },
  {
    id: "chicken-wrap",
    name: "Chicken Wrap",
    price: 27.8,
    currency: "EGP",
    calories: 660,
    protein: 41,
    carbs: 74,
    fat: 20,
    matchScore: 86.8,
    ingredients: [
      { name: "Grilled chicken strips", amount: "95g", cost: 16 },
      { name: "Whole grain tortilla", amount: "1 pc", cost: 6 },
      { name: "Shredded lettuce & cucumber", amount: "60g", cost: 3 },
      { name: "Light garlic yogurt sauce", amount: "15g", cost: 2.8 },
    ],
    targetDiff: { calories: -40, protein: -4 },
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Tell RATO about you",
    description: "Enter your health goals, nutritional targets, dietary preferences, and daily routine.",
    highlight: "Personalized profile",
    asset: "/assets/Edit Nutrition Profile.png",
  },
  {
    step: "02",
    title: "Set your budget",
    description: "Choose how much you want to spend per meal or allocate a monthly food spending allowance.",
    highlight: "Strict financial control",
    asset: "/assets/budget.png",
  },
  {
    step: "03",
    title: "RATO finds the balance",
    description: "Our engine evaluates nutrition data, available ingredients, and real pricing to build options that satisfy both sides.",
    highlight: "Dual-constraint engine",
    asset: "/assets/oading state for Instant Meal screen.png",
  },
  {
    step: "04",
    title: "Get your meal",
    description: "Receive practical, appetizing meal options with precise portion grams, recipe steps, and exact EGP costs.",
    highlight: "Ready to prepare",
    asset: "/assets/meal_details.png",
  },
];

export const brandPillars = [
  {
    id: "performance",
    title: "Performance",
    description: "Data-driven insights that help you grow without guesswork.",
    icon: "TrendingUp",
  },
  {
    id: "energy",
    title: "Energy",
    description: "Fuel your day with smart, nutrient-dense food choices.",
    icon: "Zap",
  },
  {
    id: "confidence",
    title: "Confidence",
    description: "Track, understand, and achieve your goals within your budget.",
    icon: "ShieldCheck",
  },
  {
    id: "balance",
    title: "Balance",
    description: "Nutrition, activity, and lifestyle in complete harmony.",
    icon: "Scale",
  },
];

export const showcaseScreens = [
  {
    id: "instant-meal",
    title: "Instant Meal",
    subtitle: "Hero experience",
    description: "Input your budget and calorie/protein targets. Get a tailored meal in seconds.",
    image: "/assets/instant_meal.png",
  },
  {
    id: "monthly-plan",
    title: "Monthly Plan",
    subtitle: "Calendar overview",
    description: "Plan your meals for 30 days while locking your total budget to avoid overspending.",
    image: "/assets/monthly_plan.png",
  },
  {
    id: "meal-details",
    title: "Meal Details",
    subtitle: "Ingredients & Steps",
    description: "Gram-level ingredient lists, cost breakdown, step-by-step cooking instructions.",
    image: "/assets/meal_details.png",
  },
  {
    id: "nutrition-report",
    title: "Nutrition Report",
    subtitle: "Target vs Actual",
    description: "Weekly tracking of calories, protein, carbs, and fats against target benchmarks.",
    image: "/assets/Nutrition_Report.png",
  },
  {
    id: "progress-tracking",
    title: "Reports & Progress",
    subtitle: "Measurable consistency",
    description: "Monitor budget adherence and macronutrient streaks week after week.",
    image: "/assets/reports.png",
  },
  {
    id: "meal-distribution",
    title: "Meal Distribution",
    subtitle: "Macro balancing",
    description: "Fine-tune the percentage of your daily nutrients distributed across breakfast, lunch, and dinner.",
    image: "/assets/Meal Distribution.png",
  },
  {
    id: "saved-meals",
    title: "Saved Meals",
    subtitle: "Favorites repository",
    description: "Keep your favorite high-protein, budget-friendly meals accessible anytime.",
    image: "/assets/saved_meals.png",
  },
];
