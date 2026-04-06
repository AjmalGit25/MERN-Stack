import { useState } from "react";

import Item from "./Item";
import "./FoodItems.module.css";

function FoodItems({ items }) {

  let [activeItems, setActiveItems] = useState([]);

  // Toggle add/remove
  let onBuyBtn = (item, event) => {
    let newItems = [...activeItems, item];
    if (activeItems.includes(item)) {
      newItems = activeItems.filter((i) => i !== item);
    }
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyBtn={(event) => onBuyBtn(item, event)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
