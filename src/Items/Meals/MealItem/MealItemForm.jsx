import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";


const openModal = () => {
  
}

const MealItemForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount_' + props.id, 
        type: 'number', 
        min: '1', 
        max: '5', 
        step: '1', 
        defaultValue: '1'
      }} />
   
      <button className={classes.add} onClick={openModal}>+Add</button>
    </form>
  );
};

export default MealItemForm;
