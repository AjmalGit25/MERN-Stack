import "./AddTodo.module.css";
import { useContext, useRef } from "react";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todoItemsContext.jsx";

function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const addToDoItem = contextObj.addNewItem;

  let todoNameElement = useRef();
  let todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    if (todoName.trim() === "" || todoDate.trim() === "") {
      return;         // Don't save empty items
    }

    addToDoItem(todoName, todoDate);

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <BiSolidAlarmAdd size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
