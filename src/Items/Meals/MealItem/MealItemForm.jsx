import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";

const MealItemForm = (props) => {
  const [err, setErr] = useState(true);
  

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const numEnteredAmount = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      numEnteredAmount < 1 ||
      numEnteredAmount > 5
    ) {
      setErr(false);
      return 'Sorry, the form is invalid';
    } else {
        props.onAddtoCart(numEnteredAmount);
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button className={classes.add}>
        +Add
      </button>
      {!err && <p>Please enter a valid amount (1-5) </p>}
    </form>
  );
};

export default MealItemForm;
