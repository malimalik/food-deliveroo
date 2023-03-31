import React from "react";
import Header from "./Layout/Header/Header";
import MealsIntro from "./Items/Meals/MealsIntro/MealsIntro";
import Meals from "./Items/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
