import { React, useState, Fragment } from "react";
import Header from "./Layout/Header/Header";
import Meals from "./Items/Meals/Meals";
import Cart from "./Cart/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const orderMeal = () => {
    console.log("Hello");
  };

  return (
    <Fragment>
      <Cart
        isOpen={isOpen}
        toggleModal={toggleModal}
        orderMeal={orderMeal}
      ></Cart>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
