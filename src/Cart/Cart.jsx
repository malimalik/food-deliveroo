import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import { Fragment, useState } from "react";

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const orderMeal = () => {
    console.log("Hello");
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Fragment>
      {isOpen && (
        <CartModal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.90</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={toggleModal}>
              Close
            </button>
            <button className={classes.button} onClick={orderMeal}>
              Order
            </button>
          </div>
        </CartModal>
      )}
    </Fragment>
  );
};

export default Cart;
