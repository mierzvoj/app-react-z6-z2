import ky from "ky";
import { useCallback, useEffect, useState } from "react";
import { FoodData, fromRequest } from "../data/data";

function useGet(URL: string, setData: any) {
  return useCallback(() => {
    ky.get(URL)
      .json<any>()
      .then<FoodData>((response) => fromRequest(response))
      .then(setData);
  }, [URL, setData]);
}

function useRandom(): FoodData {
  const [meal, setMeal] = useState<FoodData>();

  const randomMealFromAPI = useGet(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    (data: FoodData) => setMeal(data)
  );

  useEffect(() => {
    randomMealFromAPI();
  }, []);

  return meal as FoodData;
}

const FoodService = {
  useRandom,
};

export default FoodService;
