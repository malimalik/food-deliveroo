import React from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../../Layout/Card/Card";
import {nanoid} from "nanoid";

const MEALS = [
  {
    id: nanoid(),
    mealName: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: nanoid(),
    mealName: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: nanoid(),
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
            return (
              <MealItem
                key={meal.id}
                name={meal.mealName}
                description={meal.description}
                price={meal.price}
              ></MealItem>
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
