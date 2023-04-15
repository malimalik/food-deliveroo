import { React, useState, Fragment } from "react";
import Header from "./Layout/Header/Header";
import Meals from "./Items/Meals/Meals";
import Cart from "./Cart/Cart";

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
    <Fragment>
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
    </Fragment>
  );
}

export default App;
