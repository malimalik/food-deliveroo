import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsBumped, setIsBtnBumped] = useState(false);
  // const { cartAmount } = props;
  const cartCtx = useContext(CartContext);

  // the reduce() method will accept two parameters (currNumber, item)
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnBumped(true);
    setTimeout(() => {
      setIsBtnBumped(false);
    }, 300);

    return () => {
      clearTimeout();
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
