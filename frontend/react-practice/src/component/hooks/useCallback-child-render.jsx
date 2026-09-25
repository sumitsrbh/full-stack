import { useCallback, useState } from 'react'
import Child from './Child'
import Child1 from './Child1'

function Parent() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('clicked')
    console.log('count value', count)
  }, [])

  const handleClick1 = useCallback(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <h1>----Parent------</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>Count:{count}</h2>
      <Child onClick={handleClick} />
      <Child1 onClick={handleClick1} />
    </>
  )
}
export default Parent
