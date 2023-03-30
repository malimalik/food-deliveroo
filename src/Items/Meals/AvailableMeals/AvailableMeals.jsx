import React from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css"

const MEALS = [
  { mealName: "Sushi", description: "Finest fish and veggies", price: 22.99 },
  { mealName: "Schnitzel", description: "A german specialty!", price: 16.5 },
  {
    mealName: "Barbecue Burger",
    description: "An American Specialty",
    price: 10.5,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {MEALS.map((meal) => {
          <li>{meal.mealName}</li>;
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
