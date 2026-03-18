import styles from './ButtonContainer.module.css';

const buttonNames = ["AC", "%", "Del", "*", "7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "/", "00", "0", ".", "="];

function ButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map(buttonName =>
        <button key={buttonName} className={buttonName === "AC" ? styles.acBtn : buttonName === "=" ? styles.eqBtn : ""}>{buttonName}</button>
      )}
    </div >
  );
}

export default ButtonContainer;