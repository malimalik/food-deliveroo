import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
const MealItemForm = (props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount', 
        type: 'number', 
        min: '1', 
        max: '5', 
        step: '1', 
        defaultValue: '1'
      }} />
   
      <button className={classes.add}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
