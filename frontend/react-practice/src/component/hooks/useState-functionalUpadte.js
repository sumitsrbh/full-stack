/* 
📝 Task

Create a counter with:

+1 button

-1 button

+2 button (should correctly increment by 2 using functional update)

-2 button

Without functional updates, setCount(count + 1); setCount(count + 1); won’t work properly because React batches state updates.

import React, { useState } from "react";

function CounterFuncUpdate() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      { TODO: Fix these with functional updates }
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        +2
      </button>

      <button
        onClick={() => {
          setCount((prev) => prev - 1);
          setCount((prev) => prev - 1);
        }}
      >
        -2
      </button>
    </div>
  );
}

export default CounterFuncUpdate;


*/

import React, { useState } from 'react'

function CounterFuncUpdate() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>

      {/* TODO: Fix these with functional updates */}
      <button
        onClick={() => {
          setCount((prev) => prev + 2)
          // setCount((prev) => prev + 1)
        }}
      >
        +2
      </button>

      <button
        onClick={() => {
          setCount((prev) => prev - 2)
          // setCount((prev) => prev - 1)
        }}
      >
        -2
      </button>
    </div>
  )
}

export default CounterFuncUpdate
