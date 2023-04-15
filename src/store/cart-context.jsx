import React from 'react';

// CartContext serves as an interface, saying hey if these are the parameters I expect.
const CartContext = React.createContext({
    items: [], 
    totalAmount: 0, 
    addItem: (item) => {},
    removeItem: (id) => {}

});

export default CartContext;