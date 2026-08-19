import React, { useState } from 'react'

function UseStateTodo() {
  const [todos, setTodos] = useState([]) // list of todos
  const [input, setInput] = useState('') // input field value

  const addTodo = () => {
    if (input.trim() === '') return // prevent empty todos

    // TODO: Add the new todo into the "todos" array
    // Hint: use spread operator [...todos, input]
    setTodos([...todos, input])
    setInput('') // clear input
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        placeholder="Enter a todo"
        onChange={(e) => setInput(e.target.value)} // TODO: update input state
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {/* TODO: map over todos and display each in <li> */}
        {todos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseStateTodo
