import { useState } from 'react'
import './App.css'

function App() {
  const [desc, setDesc] = useState({ desctiption: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputDescription = (event) => {
    setDesc({ ...desc, desctiption: event.target.value });
  }
  const inputDate = (event) => {
    setDesc({ ...desc, date: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
    console.log(todos);
  }
  return (

    <>
      <h1>TodoList</h1>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type='text' value={desc.desctiption} onChange={inputDescription} />
        <label>Date:</label>
        <input type='text' value={desc.date} onChange={inputDate} />
        <input type='submit' value="add" />
      </form>
      <table>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          <hr />
          {todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.desctiption}</td>

              <td>{todo.date}</td>

            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
