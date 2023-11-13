import classes from "./CartCheckout.module.css";
import { useState, useRef } from "react";

// This is another way to handle collecting form values. Form values can be handled using refs.
// To set up, simply do the following.
// 1. Introduce useRef() hook. This will allow us to save the values inside of consts.
// 2. Point the ref property inside the input element, like so: const firstName = useRef(); <input ref={firstName}></input>
// 3. Note that useRef() itself does not store any values. It is the current.value property which stores the values
// Once set up, you can access the values by simply using the current.value property.

const isEmpty = (value) => {
  return value === null || value.match(/^ *$/) !== null;
};

const CartCheckout = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();

  const [formInputIsValid, setFormInputIsValid] = useState({
    firstName: null,
    lastName: null,
    address: null,
  });

  const submissionHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstName.current.value;
    const enteredLastName = lastName.current.value;
    const enteredAddress = address.current.value;

    console.log(enteredFirstName, enteredLastName, enteredAddress);

    // const newFormValidity = {
    //   firstName: !isEmpty(firstName.trim()),
    //   lastName: !isEmpty(lastName.trim()),
    //   address: !isEmpty(address.trim()),
    // };

    // setFormInputIsValid(newFormValidity);

    // const formIsValid =
    //   !isEmpty(firstName.trim()) &&
    //   !isEmpty(lastName.trim()) &&
    //   !isEmpty(address.trim());

    // if (formIsValid) {
    //   props.onConfirm({
    //     firstName: firstName.trim(),
    //     lastName: lastName.trim(),
    //     address: address.trim(),
    //   });
    // } else {
    //   setFormInputIsValid({
    //     firstName: !isEmpty(firstName.trim()),
    //     lastName: !isEmpty(lastName.trim()),
    //     address: !isEmpty(address.trim()),
    //   });
    // }
  };

  const firstNameControlClasses = `${classes.control} ${
    formInputIsValid.firstName === false ? classes.invalid : ""
  }`;

  const lastNameControlClasses = `${classes.control} ${
    formInputIsValid.lastName === false ? classes.invalid : ""
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputIsValid.address === false ? classes.invalid : ""
  }`;

  return (
    <form onSubmit={submissionHandler} className={classes.form}>
      <div className={firstNameControlClasses}>
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          id="name"
          name="first-name"
          required
          ref={firstName}
        />

        {!formInputIsValid.firstName && <p>Please enter a first name</p>}
      </div>
      <div className={lastNameControlClasses}>
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          required
          ref={lastName}
        />
        {!formInputIsValid.lastName && <p>Please enter a last name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" required ref={address} />
        {!formInputIsValid.address && <p>Please enter an address</p>}
      </div>

      <div className={classes.actions}>
        <button type="submit">Confirm</button>
        <button
          className={classes.submit}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CartCheckout;
