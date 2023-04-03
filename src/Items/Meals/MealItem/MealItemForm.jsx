import React from "react";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <label htmlFor="quantity" className="quantity-label">
        Amount
      </label>
      <input type="number" id="quantity" min="0" className={classes.input} />
      <button className={classes.add}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
