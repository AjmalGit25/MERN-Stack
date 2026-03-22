import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStoreStore";
import Item from "./Item";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  const deleteItem = contextObj.deleteItem;

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map(item =>
        <Item
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        />
      )}
    </div>
  );
}

export default TodoItems;