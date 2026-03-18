import styles from "./Item.module.css";


function Item({ foodItem, buyBtn}) {

  return (
    <li className={`${styles["list-content"]} list-group-item`}>
      <span>{foodItem}</span>
      <button
        className={`${styles.btnBuy} btn btn-info`}
        onClick={buyBtn}>Buy
      </button>
    </li>
  );
}

export default Item;