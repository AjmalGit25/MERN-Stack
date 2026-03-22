import styles from "./Item.module.css";


function Item({ foodItem, bought, handleBuyBtn }) {

  return (
    <li className={`${styles["list-content"]} list-group-item ${bought && "active"}`}>
      <span>{foodItem}</span>
      <button
        className={`${styles.btnBuy} btn btn-primary ${bought && "btn-danger"}`}
        onClick={handleBuyBtn}>{bought ? "Remove" : "Buy"}
      </button>
    </li>
  );
}

export default Item;