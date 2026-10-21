import { Recipe, CuisineCategory } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "rec-01",
    code: "REC-01",
    title: "Vegetable Noodles",
    slug: "vegetable-noodles",
    category: "Quick Meals (<25m)",
    cuisine: "Asian",
    difficulty: "Easy",
    prepTime: "20 mins",
    cookTimeMinutes: 20,
    servings: "2 portions",
    description: "Tender stir-fried ribbons with ginger-tamari glaze, scallions, and crisp julienned seasonal vegetables.",
    entryNumber: "Entry #042",
    colorScheme: {
      accent: "#0d9488",
      bgBadge: "#ccfbf1",
      textBadge: "#115e59",
    },
    ingredients: [
      "200g wheat noodles or soba",
      "1 tbsp toasted sesame oil",
      "1 small carrot, julienned",
      "1 red bell pepper, thinly sliced",
      "2 cups shredded savoy cabbage",
      "2 scallions, diagonally sliced",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp dark soy sauce",
      "1 tsp grated ginger",
    ],
    instructions: [
      {
        step: 1,
        title: "Par-boil & oil noodles",
        description: "Cook noodles in salted boiling water until al dente, drain and toss lightly with half the sesame oil.",
      },
      {
        step: 2,
        title: "Preheat wok",
        description: "Heat a wide skillet or wok over medium-high heat with remaining oil until shimmering.",
      },
      {
        step: 3,
        title: "Flash aromatics and root vegetables",
        description: "Add ginger, julienned carrot, and bell pepper; stir-fry briskly for 3 minutes until tender-crisp.",
      },
      {
        step: 4,
        title: "Incorporate greens & seasoning reduction",
        description: "Fold in the shredded cabbage and noodles; pour in light and dark soy sauces.",
      },
      {
        step: 5,
        title: "Glaze reduction and finish",
        description: "Toss continuously for 2 minutes to glaze evenly, finish with sliced scallions and remove from heat.",
      },
    ],
  },
  {
    id: "rec-02",
    code: "REC-02",
    title: "Rustic Tomato Galette",
    slug: "rustic-tomato-galette",
    category: "Baking & Grains",
    cuisine: "Mediterranean",
    difficulty: "Medium",
    prepTime: "45 mins",
    cookTimeMinutes: 45,
    servings: "4 servings",
    description: "Flaky spelt dough folded over slow-roasted heirloom tomatoes, herbed ricotta, and fresh thyme sprigs.",
    entryNumber: "Entry #043",
    colorScheme: {
      accent: "#f59e0b",
      bgBadge: "#fef3c7",
      textBadge: "#92400e",
    },
    ingredients: [
      "250g spelt or all-purpose flour",
      "120g cold unsalted butter, cubed",
      "3 heirloom tomatoes, thickly sliced",
      "150g whole milk ricotta",
      "1 clove garlic, minced",
      "1 tbsp fresh thyme leaves",
      "1 tbsp olive oil for drizzling",
      "Flaky sea salt and cracked black pepper",
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare pastry dough",
        description: "Cut butter into flour with a pinch of salt until pea-sized crumbs form; add iced water to bring together and chill 30 min.",
      },
      {
        step: 2,
        title: "Mix herbed ricotta",
        description: "Fold minced garlic, half the thyme, salt, and pepper into ricotta cheese until smooth.",
      },
      {
        step: 3,
        title: "Roll and assemble",
        description: "Roll dough into a 12-inch round, spread ricotta leaving a 2-inch border, and shingle tomato slices over top.",
      },
      {
        step: 4,
        title: "Fold rustic crust",
        description: "Pleat outer crust edges inwards over the tomatoes, brush border with olive oil, and season generously.",
      },
      {
        step: 5,
        title: "Bake to golden perfection",
        description: "Bake at 200°C (400°F) for 35-40 minutes until pastry is deeply golden and tomatoes are tender.",
      },
    ],
  },
  {
    id: "rec-03",
    code: "REC-03",
    title: "Lemon Herb Roast Chicken",
    slug: "lemon-herb-roast-chicken",
    category: "Quick Meals (<25m)",
    cuisine: "European",
    difficulty: "Medium",
    prepTime: "50 mins",
    cookTimeMinutes: 50,
    servings: "4 servings",
    description: "Crisp skin infused with crushed garlic, lemon peel, cracked pepper, and rosemary pan drippings.",
    entryNumber: "Entry #044",
    colorScheme: {
      accent: "#eab308",
      bgBadge: "#fef9c3",
      textBadge: "#854d0e",
    },
    ingredients: [
      "1 whole chicken (approx 1.5kg), patted dry",
      "1 unwaxed lemon, halved and zested",
      "4 cloves garlic, smashed",
      "3 sprigs fresh rosemary",
      "4 sprigs fresh thyme",
      "2 tbsp olive oil",
      "1 tsp coarse sea salt",
      "Freshly ground black pepper",
    ],
    instructions: [
      {
        step: 1,
        title: "Season cavity and skin",
        description: "Rub cavity with lemon halves, garlic, and fresh herbs; coat exterior skin generously with oil, salt, and zest.",
      },
      {
        step: 2,
        title: "Truss and rest",
        description: "Tie legs lightly with kitchen twine and allow chicken to sit at room temperature for 20 minutes before roasting.",
      },
      {
        step: 3,
        title: "High-heat sear",
        description: "Roast in preheated 220°C (425°F) oven for 20 minutes to crisp and brown skin.",
      },
      {
        step: 4,
        title: "Moderate heat roasting",
        description: "Reduce temperature to 180°C (350°F) and roast for 30 minutes until internal juices run clear.",
      },
      {
        step: 5,
        title: "Rest and carve",
        description: "Rest on cutting board for 10 minutes to redistribute juices before slicing and serving with pan drippings.",
      },
    ],
  },
  {
    id: "rec-04",
    code: "REC-04",
    title: "Miso Glazed Eggplant",
    slug: "miso-glazed-eggplant",
    category: "Plant-Based",
    cuisine: "Japanese",
    difficulty: "Easy",
    prepTime: "25 mins",
    cookTimeMinutes: 25,
    servings: "2 servings",
    description: "Cross-hatched roasted eggplant broiled with red miso, mirin, and unrefined cane sugar until blistered.",
    entryNumber: "Entry #045",
    colorScheme: {
      accent: "#8b5cf6",
      bgBadge: "#ede9fe",
      textBadge: "#5b21b6",
    },
    ingredients: [
      "2 medium Japanese or globe eggplants, halved lengthwise",
      "2 tbsp red or awase miso paste",
      "1 tbsp mirin",
      "1 tbsp sake or dry white wine",
      "1 tbsp raw cane sugar",
      "1 tbsp toasted sesame oil",
      "1 tsp toasted sesame seeds",
      "1 finely sliced scallion",
    ],
    instructions: [
      {
        step: 1,
        title: "Score eggplant flesh",
        description: "Score eggplant cut surfaces in a deep diamond cross-hatch pattern without puncturing outer skin.",
      },
      {
        step: 2,
        title: "Pan-sear eggplants",
        description: "Heat sesame oil in skillet over medium heat; place eggplants cut-side down for 5 minutes until browned.",
      },
      {
        step: 3,
        title: "Whisk miso glaze",
        description: "Whisk miso, mirin, sake, and cane sugar in a bowl until glossy and well combined.",
      },
      {
        step: 4,
        title: "Slather and broil",
        description: "Flip eggplants skin-side down onto a baking sheet, brush heavily with miso glaze, and broil 5-7 minutes until bubbling.",
      },
      {
        step: 5,
        title: "Garnish and serve",
        description: "Transfer to serving plate, sprinkle with toasted sesame seeds and sliced scallions.",
      },
    ],
  },
  {
    id: "rec-05",
    code: "REC-05",
    title: "Classic Lentil Dahl",
    slug: "classic-lentil-dahl",
    category: "Plant-Based",
    cuisine: "Indian",
    difficulty: "Easy",
    prepTime: "35 mins",
    cookTimeMinutes: 35,
    servings: "4 servings",
    description: "Yellow split lentils simmered with turmeric and finished with a fragrant cumin-mustard seed tarka.",
    entryNumber: "Entry #046",
    colorScheme: {
      accent: "#f97316",
      bgBadge: "#ffedd5",
      textBadge: "#9a3412",
    },
    ingredients: [
      "1 cup red or yellow split lentils (moong or masoor dahl), rinsed",
      "3 cups water or vegetable broth",
      "1/2 tsp ground turmeric",
      "1 medium onion, diced",
      "2 cloves garlic, minced",
      "1 inch fresh ginger, grated",
      "1 tsp cumin seeds",
      "1 tsp mustard seeds",
      "1 tbsp ghee or neutral oil",
      "Fresh cilantro leaves for garnish",
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer lentils",
        description: "Bring lentils, water, turmeric, and pinch of salt to gentle boil; simmer for 20 minutes until tender and creamy.",
      },
      {
        step: 2,
        title: "Prepare aromatics",
        description: "In a separate small skillet, heat ghee over medium heat until fragrant.",
      },
      {
        step: 3,
        title: "Bloom spices (tarka)",
        description: "Add cumin and mustard seeds to hot ghee until they pop; stir in onions, garlic, and ginger until caramelized.",
      },
      {
        step: 4,
        title: "Combine and temper",
        description: "Pour sizzling spiced aromatic oil directly into the cooked lentils and stir thoroughly.",
      },
      {
        step: 5,
        title: "Season and garnish",
        description: "Adjust salt to taste, simmer 2 minutes more, and top with torn fresh cilantro.",
      },
    ],
  },
  {
    id: "rec-06",
    code: "REC-06",
    title: "Sourdough Focaccia",
    slug: "sourdough-focaccia",
    category: "Baking & Grains",
    cuisine: "Italian",
    difficulty: "Hard",
    prepTime: "60 mins",
    cookTimeMinutes: 60,
    servings: "6 portions",
    description: "High-hydration open crumb focaccia steeped in extra virgin olive oil, flaky Maldon sea salt, and rosemary.",
    entryNumber: "Entry #047",
    colorScheme: {
      accent: "#10b981",
      bgBadge: "#d1fae5",
      textBadge: "#065f46",
    },
    ingredients: [
      "400g strong bread flour (12%+ protein)",
      "320g lukewarm filtered water (80% hydration)",
      "80g active sourdough starter",
      "8g fine sea salt",
      "50ml extra virgin olive oil (divided)",
      "Fresh rosemary needles",
      "Flaky Maldon salt for finishing",
    ],
    instructions: [
      {
        step: 1,
        title: "Mix and autolyse",
        description: "Combine flour, water, and active starter; rest covered for 30 minutes before folding in fine salt.",
      },
      {
        step: 2,
        title: "Stretch and fold series",
        description: "Perform 4 sets of coil folds spaced 30 minutes apart at warm room temperature.",
      },
      {
        step: 3,
        title: "Cold fermentation",
        description: "Transfer dough to olive-oil-lined proofing pan and ferment in refrigerator for 16-24 hours.",
      },
      {
        step: 4,
        title: "Dimple and garnish",
        description: "Bring to room temp, pour remaining olive oil on top, and dimple deeply with fingertips; scatter rosemary.",
      },
      {
        step: 5,
        title: "High-heat bake",
        description: "Bake at 230°C (450°F) for 22-25 minutes until golden bronze and crusty.",
      },
    ],
  },
  {
    id: "rec-07",
    code: "REC-07",
    title: "Smoky Black Bean Soup",
    slug: "smoky-black-bean-soup",
    category: "Soups & Stews",
    cuisine: "Latin American",
    difficulty: "Easy",
    prepTime: "30 mins",
    cookTimeMinutes: 30,
    servings: "4 servings",
    description: "Deep chipotle broth with tender simmered black turtle beans, toasted cumin, lime juice, and avocado crema.",
    entryNumber: "Entry #048",
    colorScheme: {
      accent: "#06b6d4",
      bgBadge: "#cffafe",
      textBadge: "#155e75",
    },
    ingredients: [
      "2 cans (400g each) black beans, rinsed and drained",
      "1 medium red onion, finely diced",
      "3 cloves garlic, minced",
      "1 tbsp canned chipotle peppers in adobo, minced",
      "1 tsp ground cumin",
      "3 cups rich vegetable stock",
      "1 fresh lime, juiced",
      "Fresh cilantro, diced avocado, and tortilla strips for serving",
    ],
    instructions: [
      {
        step: 1,
        title: "Sauté base aromatics",
        description: "Cook diced onion and garlic in olive oil in a heavy Dutch oven until translucent and fragrant.",
      },
      {
        step: 2,
        title: "Toast spices & adobo",
        description: "Add chipotle adobo paste and cumin; toast for 1 minute until deeply fragrant.",
      },
      {
        step: 3,
        title: "Simmer soup",
        description: "Add black beans and vegetable stock; bring to simmer and cook for 15 minutes to marry flavors.",
      },
      {
        step: 4,
        title: "Immersion blend partially",
        description: "Use immersion blender to puree half the soup, leaving rich textural bean clusters.",
      },
      {
        step: 5,
        title: "Finish with citrus",
        description: "Stir in fresh lime juice, ladle into bowls, and garnish with avocado and cilantro.",
      },
    ],
  },
  {
    id: "rec-08",
    code: "REC-08",
    title: "Sesame Tahini Noodles",
    slug: "sesame-tahini-noodles",
    category: "Quick Meals (<25m)",
    cuisine: "Middle Eastern",
    difficulty: "Easy",
    prepTime: "15 mins",
    cookTimeMinutes: 15,
    servings: "2 servings",
    description: "Cold wheat noodles tossed in roasted sesame paste, garlic-chili oil, crushed cucumber, and toasted peanuts.",
    entryNumber: "Entry #049",
    colorScheme: {
      accent: "#14b8a6",
      bgBadge: "#ccfbf1",
      textBadge: "#115e59",
    },
    ingredients: [
      "200g ramen, somen, or thin wheat noodles",
      "3 tbsp pure sesame paste or tahini",
      "2 tbsp soy sauce or tamari",
      "1 tbsp Chinese black vinegar or rice vinegar",
      "1 tbsp chili crisp oil",
      "1 clove garlic, finely grated",
      "1 Persian cucumber, smashed and sliced",
      "2 tbsp crushed roasted peanuts",
    ],
    instructions: [
      {
        step: 1,
        title: "Cook and chill noodles",
        description: "Boil noodles until chewy, rinse thoroughly under cold running water, and drain completely.",
      },
      {
        step: 2,
        title: "Whisk savory tahini emulsion",
        description: "Whisk sesame paste, soy sauce, vinegar, grated garlic, and 2 tbsp warm water until velvety smooth.",
      },
      {
        step: 3,
        title: "Smash cucumber",
        description: "Smash cucumber gently with side of knife to create crevices, then slice on a diagonal.",
      },
      {
        step: 4,
        title: "Toss noodles with sauce",
        description: "Coat chilled noodles evenly in the sesame dressing until every strand is glossy.",
      },
      {
        step: 5,
        title: "Assemble and crown",
        description: "Transfer to bowls, top with smashed cucumber, chili crisp oil, and crushed peanuts.",
      },
    ],
  },
];

export const cuisinesData: CuisineCategory[] = [
  {
    name: "East Asian Cuisines",
    slug: "asian",
    count: 55,
    description: "Traditional cooking traditions and foundational flavor profiles originating from East Asia, centered on fermented seasonings, umami broths, and quick heat techniques.",
    subRegions: [
      {
        title: "Japanese Cuisine",
        recipesCount: 14,
        description: "Dashi bases, mirin, miso, and seasonal preservation techniques.",
        focus: "Fermentation",
        base: "Kombu",
      },
      {
        title: "Chinese Regional Styles",
        recipesCount: 22,
        description: "Wok aromatics, Sichuan peppercorn, and delicate dim sum techniques.",
        focus: "Wok Hei",
        base: "Soy & Ginger",
      },
      {
        title: "Korean Traditions",
        recipesCount: 11,
        description: "Gochujang ferments, toasted sesame oil, and balanced banchan side dishes.",
        focus: "Fermentation",
        base: "Gochugaru",
      },
      {
        title: "Taiwanese Night Market",
        recipesCount: 8,
        description: "Braised broths, scallion crisps, and fragrant five-spice oil infusions.",
        focus: "Street Food",
        base: "Five-Spice",
      },
    ],
  },
  {
    name: "Mediterranean Cuisines",
    slug: "mediterranean",
    count: 42,
    description: "Wholesome coastal culinary traditions built on olive oils, sun-ripened produce, wild herbs, and slow-leavened grains.",
    subRegions: [
      {
        title: "Southern Italian",
        recipesCount: 18,
        description: "Rustic focaccia, hand-rolled pastas, and cold-pressed olive oils.",
        focus: "High-Hydration Doughs",
        base: "Olive Oil",
      },
      {
        title: "Greek Aegean",
        recipesCount: 12,
        description: "Whipped feta, tender legumes, lemon reductions, and oregano.",
        focus: "Freshness",
        base: "Citrus & Herbs",
      },
      {
        title: "Levantine Traditions",
        recipesCount: 12,
        description: "Tahini emulsions, slow braised lamb, and za'atar flatbreads.",
        focus: "Seeds & Spices",
        base: "Tahini",
      },
    ],
  },
];

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(
    (recipe) =>
      recipe.id.toLowerCase() === id.toLowerCase() ||
      recipe.slug.toLowerCase() === id.toLowerCase() ||
      recipe.code.toLowerCase() === id.toLowerCase()
  );
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (!category || category === "All") return recipes;
  return recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRecipesByCuisine(cuisine: string): Recipe[] {
  return recipes.filter(
    (recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
  );
}

export function searchRecipes(query: string): Recipe[] {
  if (!query) return recipes;
  const q = query.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(q) ||
      recipe.cuisine.toLowerCase().includes(q) ||
      recipe.category.toLowerCase().includes(q) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(q))
  );
}

export function getCuisineBySlug(slug: string): CuisineCategory | undefined {
  return cuisinesData.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
}
