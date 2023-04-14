import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import { Fragment } from "react";

const Cart = (props) => {
  

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Fragment>
      {/* {props.isOpen && ( */}
        <CartModal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.90</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.toggleModal}>
              Close
            </button>
            <button className={classes.button} onClick={props.orderMeal}>
              Order
            </button>
          </div>
        </CartModal>
      )
    </Fragment>
  );
};

export default Cart;
