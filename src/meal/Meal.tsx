import { useState } from "react";
import { FoodData } from "./data/data";
import "./Meal.css";

export function Meal(meal: FoodData) {
  const ingredients: string = meal.ingredients
    ?.map((ingredient) => ingredient.name)
    .join(", ");

  const [showMealInstructions, setShowMealInstructions] = useState(false);

  const onClick = () => setShowMealInstructions(!showMealInstructions);

  return (
    <div>
      <div className={"meal"}>
        <img onClick={onClick} src={meal.thumbnail} />
        <div className={"meal-details"}>
          <div>{meal.name}</div>
          <div>Category: {meal.category}</div>
          <div>Ingredients: {ingredients}</div>
        </div>
      </div>
      {showMealInstructions ? <MealInstructions {...meal} /> : null}
    </div>
  );
}

const MealInstructions = (meal: FoodData) => <div>{meal.instructions}</div>;
