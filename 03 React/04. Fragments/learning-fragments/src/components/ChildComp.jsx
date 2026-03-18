import styles from "./ChildComp.module.css";

function ChildComp({ sendData }) {
  return (
    <button
      className={`${styles.button} btn btn-primary mx-2`}
      onClick={() => sendData("Hello from Child")}>Send Data
    </button>
  );
}

export default ChildComp;