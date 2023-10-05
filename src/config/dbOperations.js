// import {
//     ref,
//     set, getDatabase
// } from "firebase/database";



// const db = getDatabase();


// export const pushMealsToDB = (meals) => {
//     const mealsRef = ref(db, 'meals');

//     const singleMeal = meals[0];
//     const singleMealRef = ref(mealsRef, singleMeal);
//     set(singleMealRef, singleMeal);

//     // console.log(mealsRef);
//     // so there is something wrong with when I loop through it

//     // meals.forEach(meal => {
//     //     const mealRef = ref(mealsRef, meal.id);
//     //     set(mealRef, meal); // Set the meal data in the database

//     // })

// }


import {
  ref,
  set
} from "firebase/database";
import {
  db
} from "./firebaseConfig";


// export const simplePush = async () => {
//   try {
//     const meal = {
//       id: "test-id",
//       mealName: "Test Meal",
//       description: "This is a test meal",
//       price: 99.99,
//     };

//     const mealsRef = ref(db, 'meals/test-id');
//     console.log("Before push");

//     await set(mealsRef, meal);
//     console.log("After push");
//   } catch (error) {
//     console.error("There was an error:", error);
//   }
// };
export const simplePush = async (meals) => {
  try {
    meals.forEach((meal) => {
      const mealsRef = ref(db, `meals/${meal.id}`);
      console.log("Before push");
      set(mealsRef, meal);
      console.log("After push");

    })

  } catch (error) {
    console.error("There was an error:", error);
  }
};
