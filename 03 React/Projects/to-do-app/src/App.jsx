import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import FinishMessage from "./components/FinishMessage.jsx";
import FooterName from "./components/FooterName.jsx";
import "./App.css";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/todoItemsStoreStore";

let initialTodoItems = [
  { name: "Buy Milk", dueDate: "4/10/2023" },
  { name: "Go to College", dueDate: "4/10/2023" },
  { name: "Like this video", dueDate: "right now" },
];

const todoItemsReducer = (action) => {
  return [];
};

function App() {

  let [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, todoDate) => {
    const newToDoItems = [
      ...todoItems,
      { name: todoName, dueDate: todoDate },
    ];
    setTodoItems(newToDoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }} >
      <center className="todoContainer">
        <AppName />
        <AddTodo />
        <TodoItems />
        <FinishMessage />
        <FooterName />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;