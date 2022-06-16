export interface FoodData {
  readonly id: string;
  readonly name: string;
  readonly thumbnail: string;
  readonly category: string;
  readonly instructions: string;
  readonly tutorialURL: string;
  readonly ingredients: ReadonlyArray<Ingredient>;
}

export const fromRequest = (response: any): FoodData => {
  const responseObject: any = response.meals[0];

  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient: string = responseObject[`strIngredient${i}`];
    const measure: string = responseObject[`strMeasure${i}`];
    if (ingredient.length > 0 && measure.length > 0) {
      ingredients.push({ name: ingredient, measure: measure });
    }
  }

  return {
    id: responseObject.idMeal,
    name: responseObject.strMeal,
    thumbnail: responseObject.strMealThumb,
    category: responseObject.strCategory,
    instructions: responseObject.strInstructions,
    tutorialURL: responseObject.strYoutube,
    ingredients: ingredients,
  };
};

interface Ingredient {
  readonly name: string;
  readonly measure: string;
}
