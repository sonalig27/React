import React from "react";
import MealsSummary from "../Meal/MealsSummary";
import AvailableMeals from "../Meal/AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
