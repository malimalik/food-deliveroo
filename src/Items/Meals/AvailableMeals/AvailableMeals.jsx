import React, { useEffect, useState } from "react";
import classes from "../AvailableMeals/AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../../Layout/Card/Card";
import axios from "axios";

const MEALS = [];

const AvailableMeals = () => {
  // now to populate the meals, we will have to fetch from the database.
  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://deliveroo-90143-default-rtdb.firebaseio.com/meals.json")
      .then((res) => {
        const fetchedMeals = res.data;
        console.log(res);
        let loadedMeals = [];
        for (const key in fetchedMeals) {
          loadedMeals.push({
            id: key,
            ...fetchedMeals[key],
          });
        }

        setMealsData(loadedMeals);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsData.map((meal) => {
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
