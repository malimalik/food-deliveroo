import {
  nanoid
} from 'nanoid'
const {
  ref,
  set
} = require("firebase/database");
const {
  db
} = require("./firebaseConfig");

const MEALS = [{
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


const pushMealsToDB = async () => {
  try {
    MEALS.forEach((meal) => {
      const mealsRef = ref(db, `meals/${meal.id}`);
      set(mealsRef, meal);
    })

  } catch (error) {
    console.error("There was an error:", error);
  }
};