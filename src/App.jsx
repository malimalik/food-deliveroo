import React from "react";
import Header from "./Layout/Header/Header";
import MealsIntro from "./Items/Meals/MealsIntro/MealsIntro";
import Meals from "./Items/Meals/Meals";
import Cart from "./Cart/Cart";

function App() {


  return (
    <React.Fragment>
      <Cart></Cart>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
