import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Deliveroo</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="A table full of food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
