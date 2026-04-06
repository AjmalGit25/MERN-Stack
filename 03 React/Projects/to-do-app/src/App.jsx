import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import FinishMessage from "./components/FinishMessage.jsx";
import FooterName from "./components/FooterName.jsx";
import "./App.css";
import { TodoItemsContextProvider } from "./store/todoItemsContext.jsx";


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todoContainer">
        <AppName />
        <AddTodo />
        <TodoItems />
        <FinishMessage />
        <FooterName />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;