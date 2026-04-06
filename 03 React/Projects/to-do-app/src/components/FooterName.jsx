import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsContext.jsx";

function FooterName() {
  const { todoItems } = useContext(TodoItemsContext);

  if (todoItems.length === 0) {
    return <h3 className="text-center text-primary my-5">Great! 👏 Md Ajmal Hussain</h3>;
  }
  return (
    <p className="text-center text-primary my-5 lead">Don't stop! You can do it! ⚡</p>
  );
}

export default FooterName;