export interface Recipe {
  Nutrition: Nutrition;
  Suggestions: Suggestion;
}

interface Suggestion {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: MissedIngredient[];
  usedIngredients: UsedIngredient[];
  unusedIngredients: any[];
  likes: number;
}

interface UsedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
}

interface MissedIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: any[];
  image: string;
}

interface Nutrition {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
  summary: string;
  cuisines: any[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  report: null;
  tips: Tips;
  openLicense: number;
  suspiciousDataScore: number;
  approved: number;
  unknownIngredients: UnknownIngredient[];
  userTags: any[];
  originalId: null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

interface UnknownIngredient {
  name: string;
  longName: string;
  amount: number;
  unit: string;
  originalString: string;
  originalStringClean: string;
  originalName: string;
  metaInformation: string[];
  sourceLanguage: string;
  id: number;
  aisle: null;
  image: null;
  consistency: string;
  ontologyName: null;
  amountAndUnitMetric: null;
  amountAndUnitUs: null;
  ingredientId: null;
  comparableName: string;
  nutritionId: null;
  pricePerAmount: number;
  amountForPrice: null;
  price: number;
  sustainable: boolean;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  nutrients: Nutrients;
  foodProperties: Nutrients;
  flavonoids: Nutrients;
  possibleUnits: any[];
  ontologyConcept: null;
  relevance: number;
  refuse: number;
  multiplier: number;
  immutable: boolean;
  amountWithUnit: string;
  unitLong: string;
  unitShort: string;
  metaInformationForDb: string;
}

interface Nutrients {
}

interface Tips {
  health: any[];
  price: string[];
  cooking: string[];
  green: string[];
}

interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

interface Step {
  number: number;
  step: string;
  ingredients: Ingredient2[];
  equipment: Ingredient2[];
  length?: Length;
}

interface Length {
  number: number;
  unit: string;
}

interface Ingredient2 {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

interface WinePairing {
  pairedWines: any[];
  pairingText: string;
  productMatches: any[];
}

interface Nutrition {
  nutrients: Nutrient[];
  properties: Property[];
  flavonoids: Property[];
  ingredients: Ingredient[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

interface WeightPerServing {
  amount: number;
  unit: string;
}

interface CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;
}

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  nutrients: Nutrient[];
}

interface Property {
  name: string;
  amount: number;
  unit: string;
}

interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
}

interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: null | string;
  consistency: string;
  name: string;
  nameClean: null | string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

interface Measures {
  us: Us;
  metric: Us;
}

interface Us {
  amount: number;
  unitShort: string;
  unitLong: string;
}