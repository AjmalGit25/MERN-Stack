import AppName from './components/AppName.jsx'
import AddTodo from './components/AddTodo.jsx'
import TodoItem1 from './components/TodoItem1.jsx'
import TodoItem2 from './components/TodoItem2.jsx'
import FooterName from './components/FooterName.jsx'
import './App.css';

function App() {
  return <center class="todo-container">
    <AppName />
    <AddTodo />
    <div className='items-container'>
      <TodoItem1 />
      <TodoItem2 />
    </div>
    <FooterName />
  </center>
}

export default App
