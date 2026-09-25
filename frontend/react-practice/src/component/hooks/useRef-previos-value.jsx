import { useEffect, useRef, useState } from 'react'

function CounterHistory() {
  const [count, setCount] = useState(0)
  const previousCount = useRef()

  useEffect(() => {
    previousCount.current = count
  }, [count])
  console.log('previous count:', previousCount.current)
  return (
    <>
      <h1>Counter History</h1>
      <h2>Current:{count}</h2>
      <h2>Previous count: {previousCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}
export default CounterHistory
