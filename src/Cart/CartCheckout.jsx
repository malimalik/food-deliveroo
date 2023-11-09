import classes from "./CartCheckout.module.css";
import CartContext from "../store/cart-context";
import { useState, useContext } from "react";
import axios from "axios";
import { CleaningServicesOutlined } from "@mui/icons-material";

const CartCheckout = (props) => {
  const [checkoutData, setCheckoutData] = useState({});
  const cartCtx = useContext(CartContext);

  const submissionHandler = (event) => {
    event.preventDefault();
    const { items, totalAmount } = cartCtx;
    const payload = {
      items: items,
      total: totalAmount,
      details: checkoutData,
    };

    try {
      const response = axios.post(
        "https://deliveroo-90143-default-rtdb.firebaseio.com/orders.json",
        payload
      );

      if (response.status === 200) {
        console.log("Successfully submitted data");
      } else {
        console.error("Failed to save data", response.status);
      }
    } catch (error) {
      console.error("An error occurred while saving the data", error);
    }

    console.log(payload);
  };

  const changeHandler = (event) => {
    setCheckoutData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(event.target.value);
  };

  return (
    <form onSubmit={submissionHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          id="name"
          name="first-name"
          required
          onChange={changeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          required
          onChange={changeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={changeHandler}
        />
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
