import classes from "./CartCheckout.module.css";
import { useState } from "react";

const isEmpty = (value) => {
  return value === null || value.match(/^ *$/) !== null;
};

const CartCheckout = (props) => {
  const [formInputIsValid, setFormInputIsValid] = useState({
    firstName: null,
    lastName: null,
    address: null,
  });

  const [checkoutData, setCheckoutData] = useState({});

  const {
    "first-name": firstName,
    "last-name": lastName,
    address,
  } = checkoutData;

  console.log("here is the checkout data");
  console.log(checkoutData);

  const submissionHandler = (event) => {
    event.preventDefault();

    const newFormValidity = {
      firstName: !isEmpty(firstName.trim()),
      lastName: !isEmpty(lastName.trim()),
      address: !isEmpty(address.trim()),
    };

    setFormInputIsValid(newFormValidity);

    const formIsValid =
      !isEmpty(firstName.trim()) &&
      !isEmpty(lastName.trim()) &&
      !isEmpty(address.trim());

    if (formIsValid) {
      props.onConfirm({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        address: address.trim(),
      });
    } else {
      setFormInputIsValid({
        firstName: !isEmpty(firstName.trim()),
        lastName: !isEmpty(lastName.trim()),
        address: !isEmpty(address.trim()),
      });
    }
  };

  const changeHandler = (event) => {
    setCheckoutData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
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
          onChange={changeHandler}
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
          onChange={changeHandler}
        />
        {!formInputIsValid.lastName && <p>Please enter a last name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={changeHandler}
        />
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
