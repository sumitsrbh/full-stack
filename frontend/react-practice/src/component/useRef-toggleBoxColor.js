import React, { useRef, useState } from 'react'

function ToggleBoxWithHistory() {
  const toggleRef = useRef(null)
  const toggleHistryRef = useRef([])
  const [, forceRender] = useState({})

  const toggleColor = () => {
    if (toggleRef.current.style.backgroundColor === 'red') {
      toggleRef.current.style.backgroundColor = 'blue'
      toggleHistryRef.current.push('blue')
    } else {
      toggleRef.current.style.backgroundColor = 'red'
      toggleHistryRef.current.push('red')
    }
    forceRender({})
  }
  return (
    <div>
      <h2>Toggle Box color</h2>
      <div
        ref={toggleRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          margin: '5px',
        }}
      ></div>
      <button onClick={toggleColor}>Toggle</button>
      <p>History:</p>
      <ul>
        {toggleHistryRef.current.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ToggleBoxWithHistory
