import { useState } from 'react'

export default function KeyDemo() {
  const [users, setUsers] = useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ])

  function reorder() {
    setUsers([
      { id: 3, name: 'C' },
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ])
  }

  return (
    <div>
      <h2>Kye index demo</h2>
      <button onClick={reorder}>Reorder</button>

      {users.map((user, index) => (
        <UserRow key={index} user={user} />
      ))}
    </div>
  )
}

function UserRow({ user }) {
  const [text, setText] = useState('')

  return (
    <div>
      <strong> {user.name} </strong>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}
