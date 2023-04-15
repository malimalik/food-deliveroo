import CartContext from "./cart-context";

// With the CartProvider component, we get access
const CartProvider = (props) => {
  const addItem = (item) => {};

  const removeItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={caret}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
