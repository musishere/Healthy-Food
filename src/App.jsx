import "./App.css";
import Container from "./Components/Container";
import Title from "./Components/Title";
import FoodList from "./FoodList";
import Seacrh from "./Components/Search";
import { useState } from "react";

function App() {
  const [Fooditem, SetFooditem] = useState([
    "Chiken-Karahi",
    "Mutton-biryani",
    "Palaow",
    "Keema"
  ]);

  const onKeyDown = (event) => {
    if (event.key == "Enter") {
      let NewFoodAdded = event.target.value;
      let newFooditems = [...Fooditem, NewFoodAdded];
      console.log(event.target.value);
      SetFooditem(newFooditems);
    }
  };

  return (
    <Container>
      <Title name="Healthy Food" />
      <Seacrh onKeyDown={onKeyDown} />
      <FoodList
       Fooditems={Fooditem}
      onKeyDown={onKeyDown}
       />
    </Container>
  );
}

export default App;
