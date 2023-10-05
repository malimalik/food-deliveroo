"use strict";

var _nanoid = require("nanoid");

var _require = require("firebase/database"),
    ref = _require.ref,
    set = _require.set;

var _require2 = require("./firebaseConfig"),
    db = _require2.db;

var MEALS = [{
  id: (0, _nanoid.nanoid)(),
  mealName: "Sushi",
  description: "Finest fish and veggies",
  price: 22.99
}, {
  id: (0, _nanoid.nanoid)(),
  mealName: "Schnitzel",
  description: "A german specialty!",
  price: 16.5
}, {
  id: (0, _nanoid.nanoid)(),
  mealName: "Barbecue Burger",
  description: "An American Specialty",
  price: 10.5
}];

var pushMealsToDB = function pushMealsToDB() {
  return regeneratorRuntime.async(function pushMealsToDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            MEALS.forEach(function (meal) {
              var mealsRef = ref(db, "meals/".concat(meal.id));
              set(mealsRef, meal);
            });
          } catch (error) {
            console.error("There was an error:", error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};