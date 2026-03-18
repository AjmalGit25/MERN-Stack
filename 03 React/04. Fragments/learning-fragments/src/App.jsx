import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./components/AppName";
import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import FoodInput from "./components/FoodInput";
import ErrorMessage from "./components/ErrorMessage";
import Welcome from "./components/Welcome";
import ParentComp from "./components/ParentComp";

const foodItems = ["Milk", "Green Vegetable", "Daal", "Roti", "Salad", "Ghee"];
// const foodItems = [];

const App = () => {
  return (
    <>
      <Container>
        <AppName />
        <FoodInput />
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
        <ParentComp />
        <Welcome name="Ajmal Hussain" />
      </Container>
    </>
  );
};

export default App;
export { foodItems };