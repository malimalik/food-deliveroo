import React from "react";
import MealsIntro from "./MealsIntro/MealsIntro";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsIntro />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
