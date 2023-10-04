import React from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../../Layout/Card/Card";
import { nanoid } from "nanoid";
import { pushMealsToDB } from "../../../config/dbOperations";
import { ref, get, set } from "firebase/database";
import { db } from "../../../config/firebaseConfig";

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

const initializeData = async () => {
  // inside this function, i need to first fetch
  const mealsRef = ref(db, "meals");
  const results = await get(mealsRef);

  if (!results.exists()) {
    pushMealsToDB(MEALS);

    console.log("Data Initialized");
  } else {
    console.log("Data not initialized");
  }
};

initializeData();

const AvailableMeals = () => {
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
