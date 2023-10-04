// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase, ref, set } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOS5BGxVX-AL8ypRQdrO5MNBsWIgZHaAY",
  authDomain: "deliveroo-90143.firebaseapp.com",
  databaseURL: "https://deliveroo-90143-default-rtdb.firebaseio.com",
  projectId: "deliveroo-90143",
  storageBucket: "deliveroo-90143.appspot.com",
  messagingSenderId: "539825767370",
  appId: "1:539825767370:web:396c24b260bd76f9870533",
  measurementId: "G-7YY1MTYV8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

console.log("Database connection was successful")
