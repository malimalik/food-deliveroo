import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Fragment>
      {/* {props.isOpen && ( */}
      <CartModal dismiss={props.dismiss}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.toggleModal}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={props.orderMeal}>
              Order
            </button>
          )}
        </div>
      </CartModal>
      )
    </Fragment>
  );
};

export default Cart;
