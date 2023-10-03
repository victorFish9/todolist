import { useState } from 'react'
import './App.css'
import TodoTable from './components/TodoTable';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);



  const addTodo = (desc) => {

    setTodos([...todos, desc]);
    console.log(todos);
  }

  const handleDelete = (index) => {
    const updatedList = todos.filter((_, i) => i !== index);
    setTodos(updatedList);
  }
  return (

    <>
      <TodoList onSubmit={addTodo} />

      <TodoTable todos={todos} onDelete={handleDelete} />
    </>
  )
}

export default App
