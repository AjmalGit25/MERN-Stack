import styles from "./FoodInput.module.css";

function FoodInput() {
  return (
    <input type="text" className={`${styles.foodInput} form-control`} onChange={event => console.log(event)} placeholder="Enter Food Item here..." />
  );
}

export default FoodInput;