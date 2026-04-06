import styles from "./FoodInput.module.css";

function FoodInput({ handleOnKeyDown }) {   // Props passed from App.jsx
  return (
    <input
      type="text"
      className={`${styles.foodInput} form-control`}
      placeholder="Enter Food Item here..."
      onKeyDown={handleOnKeyDown} />
  );
}

export default FoodInput;