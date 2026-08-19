import React, { useState } from 'react'

function UseStateObject() {
  const [user, setUser] = useState({ name: 'Sumit', age: 25 })

  const handleChange = (e) => {
    const { name, value } = e.target
    // TODO: update object state correctly
    setUser({ ...user, [name]: value })
  }

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <p>
        Name: {user.name}, Age: {user.age}
      </p>
    </div>
  )
}

export default UseStateObject
