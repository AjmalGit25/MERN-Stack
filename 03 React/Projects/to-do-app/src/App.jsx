import AppName from './components/AppName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItems from './components/TodoItems.jsx'
import FooterName from './components/FooterName.jsx'
import './App.css';

const todoItems = [
  {
    name: "Buy Milk",
    dueDate: "4/10/2023",
  },
  {
    name: "Go to College",
    dueDate: "4/10/2023",
  },
  {
    name: "Like this video",
    dueDate: "right now",
  },
];

function App() {
  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems} />
    <FooterName />
  </center>
}

export default App
