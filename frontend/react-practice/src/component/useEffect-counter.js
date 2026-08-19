// Counter with document.title

// Task:

// Create a counter.

// Update the browser tab title (document.title) every time the count changes.

// import React, { useState, useEffect } from "react";

// function CounterWithTitle() {
//   const [count, setCount] = useState(0);

//   // TODO: useEffect to update document.title when count changes

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default CounterWithTitle;

import React, { useState, useEffect } from 'react'

function CounterWithTitle() {
  const [count, setCount] = useState(0)

  // TODO: useEffect to update document.title when count changes
  useEffect(() => {
    document.title = `Count:${count}`
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default CounterWithTitle
