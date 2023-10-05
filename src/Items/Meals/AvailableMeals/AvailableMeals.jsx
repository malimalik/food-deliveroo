import React, { useEffect } from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../../Layout/Card/Card";
import { pushMealsToDB } from "../../../config/dbOperations";

const AvailableMeals = () => {
  // now to populate the meals, we will have to fetch from the database.

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {MEALS.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
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
