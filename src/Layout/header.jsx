import React from "react";
import classes from "./Header.module.css";
import meals from "../assets/meals.jpg"
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Deliveroo</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={meals} alt="A table full of food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
