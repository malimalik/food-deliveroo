import { React, useState} from "react";
import Header from "./Layout/Header/Header";
import Meals from "./Items/Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const dismiss = () => {
    setIsOpen(false);
  };

  const orderMeal = () => {
    console.log("Ordered!");
  };


  return (
    <CartProvider>
      {isOpen && (
        <Cart
          dismiss={dismiss}
          toggleModal={toggleModal}
          orderMeal={orderMeal}
        ></Cart>
      )}
      <Header onShowModal={toggleModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
