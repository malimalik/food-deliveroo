import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemove = (id) => {

  }
  const cartItemAdd = (item) => {

  }

 const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
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
