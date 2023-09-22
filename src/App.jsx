import { useState } from 'react'
import './App.css'

function App() {
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChange = (event) => {
    setDesc(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }
  return (

    <>
      <h1>TodoList</h1>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type='text' value={desc} onChange={inputChange} />
        <label>Date:</label>
        <input type='text' value={desc} onChange={inputChange} />
        <input type='submit' value="add" />
      </form>
      <table>
        <tbody>
          {todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
