import { nanoid } from 'nanoid';
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
    description: "A German specialty!",
    price: 16.5,
  },
  {
    id: nanoid(),
    mealName: "Barbecue Burger",
    description: "An American Specialty",
    price: 10.5,
  },
];

export {MEALS};
