import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import React, { Fragment, useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem/CartItem";
import CartCheckout from "./CartCheckout";
import CartCheckoutRef from "./CartCheckoutRef";
import CartCheckoutFormData from "./CartCheckoutFormData";
import axios from "axios";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setisCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDataSent, setIsDataSent] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount}`;
  console.log(cartCtx.total);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemove = (id) => {
    cartCtx.removeItem(id);
    // We want to delete items based off of their ID.
  };

  const cartItemAdd = (item) => {
    // we will need to identify the id of our item
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const emptyCart = () => {
    cartCtx.removeAll();
  };

  const orderHandler = (e) => {
    // here we collect the values,
    // the name of the items and their quantity and the price
    // the total price as well
    e.preventDefault();
    setisCheckout(true);
  };

  const confirmOrderHandler = async (checkoutData) => {
    setIsSubmitting(true);

    const { items, totalAmount } = cartCtx;

    const payload = {
      items: items,
      total: totalAmount,
      details: checkoutData,
    };

    try {
      const response = await axios.post(
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

    setIsSubmitting(false);
    setIsDataSent(true);
    cartCtx.removeAll();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          price={item.price}
          name={item.name}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartActions = (
    <div className={classes.actions}>
      {hasItems && !isCheckout && (
        <button className={classes.button} onClick={emptyCart}>
          Empty Cart
        </button>
      )}
      {!isCheckout && (
        <button className={classes["button--alt"]} onClick={props.toggleModal}>
          Close
        </button>
      )}
      {hasItems && !isCheckout && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && (
        <CartCheckoutFormData
          // onConfirm={confirmOrderHandler}
          onCancel={props.toggleModal}
        />
      )}

      {!isCheckout && cartActions}
    </React.Fragment>
  );

  return (
    <Fragment>
      <CartModal dismiss={props.dismiss}>
        {!isSubmitting && !isDataSent && cartModalContent}
        {isSubmitting && <p>Submitting Data</p>}
        {!isSubmitting && isDataSent && (
          <React.Fragment>
          <p>Successfully sent the order!</p>
          <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
        </React.Fragment>
        )}
      </CartModal>
      )
    </Fragment>
  );
};

export default Cart;
