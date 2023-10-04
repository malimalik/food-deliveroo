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
    // When we are trying to identify an item from a list, we should do it based off of the id rather than the name of the
    // item because that is guarenteed to be a unique identifier.
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
    // we keep reducing the amount until it hits zero, after which we remove the item completely
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
