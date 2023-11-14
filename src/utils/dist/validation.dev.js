"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueEquals = exports.isEmpty = exports.isEmail = void 0;

var isEmail = function isEmail(input) {
  return input.includes("@");
};

exports.isEmail = isEmail;

var isEmpty = function isEmpty(input) {
  return input.trim() !== "";
};

exports.isEmpty = isEmpty;

var valueEquals = function valueEquals(value, value2) {
  return value === value2;
};

exports.valueEquals = valueEquals;