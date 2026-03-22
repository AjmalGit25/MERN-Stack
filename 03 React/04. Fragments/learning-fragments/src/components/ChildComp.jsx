import styles from "./ChildComp.module.css";

// Child receiving a function from its parent as prop: sendData
function ChildComp({ sendData }) {      // Props destructuring
  return (
    <button
      className={`${styles.button} btn btn-primary mx-2`}
      // Sends data back to parent when button clicked
      onClick={() => sendData("Hello from Child")}>Send Data
    </button>
  );
}

export default ChildComp;