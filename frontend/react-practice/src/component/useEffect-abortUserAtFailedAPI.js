// Fetch data from a public API when the component mounts (first render) and display it.
// This will teach you:
// How to use useEffect for data fetching
// How the dependency array [] ensures it only runs once
// On component mount (useEffect with []), fetch data from:
// 👉 https://jsonplaceholder.typicode.com/users
// Store the response in users.
// Display the list of user names inside <ul><li></li></ul>.
// Show "Loading..." while fetching data.

//* Add a retry counter.
// On error, wait a bit and retry.
// Use exponential backoff (delay grows: 1s → 2s → 4s …).

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserListWithRetry() {
  const [users, setUsers] = useState([])
  const [loading, setloading] = useState(true)
  const [lastFetched, setLastFetched] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetchUser(controller.signal)

    //clean only cares about aborting
    return () => controller.abort()
  }, [])

  const fetchUser = async (signal) => {
    setloading(true)
    setError(null)

    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/user',
        { signal }
      )
      if (!response.ok) throw new Error('Failed to fetch')
      setLastFetched(new Date().toLocaleTimeString())
      console.log('repsonse data ', response.data)
      setUsers(response.data)
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted')
      } else {
        setError(error.message)
      }
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
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}
          </li> // can't render the object
        ))}
      </ul>
      <button onClick={fetchUser}>Reload Users</button>
    </div>
  )
}
export default UserListWithRetry
