import { useReducer } from "react";
import CartContext from "./cart-context";

// With the CartProvider component, we provide access to the context first


const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {}
  }
  return {
    items: updatedItems, 
    totalAmount: updatedTotalAmount
  };
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItem = (item) => {
    dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
  };

  const removeItem = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
