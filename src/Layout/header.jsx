import React from "react";
import classes from "./Header.module.css";
import mealsImg from "./assets/mealsImg.png"
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header} id="header">
        <h1>Deliveroo</h1>
        <button>Cart</button>
      </header>
      <div>
        <img></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
