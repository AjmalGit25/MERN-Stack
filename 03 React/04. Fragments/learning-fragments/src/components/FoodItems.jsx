import Item from "./Item";
import "./FoodItems.module.css";

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} buyBtn={() => {console.log(`${item} is bought!`);}} />
      ))}
    </ul>
  );
}

export default FoodItems;
