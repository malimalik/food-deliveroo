import {
  ref,
  set
} from "firebase/database";
import {
  db
} from "./firebaseConfig.js";
import {
  MEALS
} from "../data/MealsData.js";


console.log(MEALS);


const pushMealsToDB = async () => {
  try {
    for (const meal of MEALS) {
      const mealsRef = ref(db, `meals/${meal.id}`);
      await set(mealsRef, meal);
    }

    console.log('All meals have been pushed to the database.');
  } catch (error) {
    console.error("There was an error:", error);
  }
};


const fetchMealsFromDB = async () => {
  
}

export {
  pushMealsToDB
};

if (require.main === module) {
  pushMealsToDB().catch(err => console.log(err));
}