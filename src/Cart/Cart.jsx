import CartModal from "./CartModal";
import classes from "./Cart.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem/CartItem";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

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
    cartCtx.removeAll(cartCtx.removeAll());
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          price={item.price}
          name={item.name}
          onRemove={cartItemRemove.bind(null, item.id)}
          onEmptyCart={emptyCart.bind(null, this)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Fragment>
      <CartModal dismiss={props.dismiss}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>

        <div className={classes.button}></div>
        <button
          className={classes["button-empty-cart"]}
          onClick={props.emptyCart}
        >
          <DeleteIcon/>
          Empty Cart
        </button>

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
