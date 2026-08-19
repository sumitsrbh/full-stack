// Fetch data from a public API when the component mounts (first render) and display it.
// This will teach you:
// How to use useEffect for data fetching
// How the dependency array [] ensures it only runs once
// On component mount (useEffect with []), fetch data from:
// 👉 https://jsonplaceholder.typicode.com/users
// Store the response in users.
// Display the list of user names inside <ul><li></li></ul>.
// Show "Loading..." while fetching data.

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setloading] = useState(true)
  const [lastFetched, setLastFetched] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setLastFetched(new Date().toLocaleTimeString())
      console.log('repsonse data ', response.data)
      setUsers(response.data)
    } catch (error) {
      setError(error.message)
      //   alert('error fetching data', error.message)
    } finally {
      setloading(false)
    }
  }

  if (loading) return <p>loading .....</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div>
      <h2>User Lists</h2>
      <h3>Last fetched at: {lastFetched || 'Not fetched yet'}</h3>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li> // can't render the object
        ))}
      </ul>
      <button onClick={fetchUser}>Reload Users</button>
    </div>
  )
}
export default UserList
