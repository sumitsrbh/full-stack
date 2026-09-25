import { useRef, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(0)

  renderCount.current += 1

  return (
    <>
      <h1>Coutner with ref</h1>
      <h2>{count}</h2>
      <p>Renders: {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter
