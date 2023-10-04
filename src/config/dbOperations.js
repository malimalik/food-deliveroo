import {
    ref,
    set
} from "firebase/database";
import {
    db
} from "./firebaseConfig";


export const pushMealsToDB = (meals) => {
    const mealsRef = ref(db, 'meals');

    meals.forEach(meal => {
        const mealRef = ref(mealsRef, meal.id);
        set(mealRef, meal); // Set the meal data in the database

    })
}