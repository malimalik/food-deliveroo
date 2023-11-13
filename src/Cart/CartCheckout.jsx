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

  const { firstName = "", lastName = "", address = "" } = checkoutData;

  const [didEdit, setDidEdit] = useState({
    firstName: false,
    lastName: false,
    address: false,
  });

  const firstNameIsInvalid = isEmpty(firstName.trim()) && didEdit.firstName;
  const lastNameIsInvalid = isEmpty(lastName.trim()) && didEdit.lastName;
  const addressIsInvalid = isEmpty(address.trim()) && didEdit.address;

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

    event.target.reset();
  };

  const changeHandler = (event) => {
    setCheckoutData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });

    setDidEdit((prevState) => {
      return {
        ...prevState,
        [event.target.name]: true,
      };
    });
  };

  const handleBlur = (e) => {
    setDidEdit((prevState) => {
      return {
        ...prevState,
        [e.target.name]: true,
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
          name="firstName"
          required
          onChange={changeHandler}
          onBlur={handleBlur}
        />

        {firstNameIsInvalid && <p>Please enter a first name</p>}
      </div>
      <div className={lastNameControlClasses}>
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          required
          onChange={changeHandler}
          onBlur={handleBlur}
        />
        {lastNameIsInvalid && <p>Please enter a last name</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={changeHandler}
          onBlur={handleBlur}
        />
        {addressIsInvalid && <p>Please enter a first name</p>}
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
