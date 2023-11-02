"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.app = void 0;

var _app = require("firebase/app");

var _database = require("firebase/database");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDOS5BGxVX-AL8ypRQdrO5MNBsWIgZHaAY",
  authDomain: "deliveroo-90143.firebaseapp.com",
  databaseURL: "https://deliveroo-90143-default-rtdb.firebaseio.com",
  projectId: "deliveroo-90143",
  storageBucket: "deliveroo-90143.appspot.com",
  messagingSenderId: "539825767370",
  appId: "1:539825767370:web:396c24b260bd76f9870533",
  measurementId: "G-7YY1MTYV8J"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
var db = (0, _database.getDatabase)(app);
exports.db = db;
console.log("Database connection was successful");