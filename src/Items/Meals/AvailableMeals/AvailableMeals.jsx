import React from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import Card from "../../../Layout/Card/Card";

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
      <Card>
        <ul>
          {MEALS.map((meal) => {
            return <li>{meal.mealName}</li>;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
