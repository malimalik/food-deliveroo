import React from 'react';

// CartContext serves as an interface, saying hey, here are the parameters that you should expect, or rather
// here is the information that I want my context to have and be shared around all the components. 
const CartContext = React.createContext({
    items: [], 
    totalAmount: 0, 
    addItem: (item) => {},
    removeItem: (id) => {}

});

export default CartContext;