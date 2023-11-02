"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEALS = void 0;

var _nanoid = require("nanoid");

var MEALS = [{
  id: (0, _nanoid.nanoid)(),
  mealName: "Sushi",
  description: "Finest fish and veggies",
  price: 22.99
}, {
  id: (0, _nanoid.nanoid)(),
  mealName: "Schnitzel",
  description: "A German specialty!",
  price: 16.5
}, {
  id: (0, _nanoid.nanoid)(),
  mealName: "Barbecue Burger",
  description: "An American Specialty",
  price: 10.5
}];
exports.MEALS = MEALS;