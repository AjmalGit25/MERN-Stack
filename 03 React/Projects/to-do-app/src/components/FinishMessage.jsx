import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStoreStore";
import styles from "./FinishMessage.module.css";

function FinishMessage() {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return (
      <p className={`text-center text-success ${styles.finished}`}>Great Achievement! You've finished all your tasks.</p>
    );
  }
  return null;
}

export default FinishMessage;