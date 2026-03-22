import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./components/AppName";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import FoodInput from "./components/FoodInput";
import ErrorMessage from "./components/ErrorMessage";
import Welcome from "./components/Welcome";
import ParentComp from "./components/ParentComp";
import { useState } from "react";

// let foodItems = ["Milk", "Green Vegetable", "Daal", "Roti", "Salad", "Ghee", "Paneer"];

const App = () => {
  let [foodItems, setFoodItems] = useState([]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <AppName />
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
        <ParentComp />
        <Welcome name="Ajmal Hussain" />
      </Container>
    </>
  );
};

export default App;