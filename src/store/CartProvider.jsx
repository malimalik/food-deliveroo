import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Determine if the exists cart item's index exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const currentCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (currentCartItem) {
      updatedItem = {
        ...currentCartItem,
        amount: currentCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount = parseFloat(
      (state.totalAmount + action.item.price * action.item.amount).toFixed(2)
    );

    if (
      typeof action.item.price != "number" ||
      typeof action.item.amount != "number"
    ) {
      console.log(typeof action.item.price);
      console.log(typeof action.item.amount);
      return defaultCartState;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const currItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = parseFloat(state.totalAmount - currItem.price).toFixed(2);
    let updatedItem;
    let updatedItems;

    if (currItem.amount > 1) {
      updatedItem = {
        ...currItem,
        amount: currItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // we just remove it.
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "EMPTY_CART") {
    state.items.length = 0;
    let updatedItems = [...state.items];

    return {
      items: updatedItems, 
      totalAmount: 0,
    }

  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    console.log("Adding an item with the price", item.price);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    console.log("Removing an item with the id", id);
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const removeAllItems = (items) => {
    console.log("Emptying all cart items");
    dispatchCartAction({type: "EMPTY_CART", items})
    
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
