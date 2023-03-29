import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header} id="header">
        <h2>Deliveroo</h2>
      </header>
    </React.Fragment>
  );
};

export default Header;
