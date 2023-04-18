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

    // If the index exists, there will be an item.
    // We want to do it this way because there could be two items with the same name. 
    // When we are trying to identify an item from a list, we should do it based off 

    const currentCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    // if the item is already in the cart, we just need to update its amount
    if (currentCartItem) {
      updatedItem = {
        ...currentCartItem,
        amount: currentCartItem.amount + action.item.amount,
      };

      // we update the currentItem but we also need to update the updatedItems
      // update the updatedItem at the existingCartItemIndex
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

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
