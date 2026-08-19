// Focus Input
// 👉 Create a text input and a button.
// When you click the button, the input should get focused using useRef.

import React, { useEffect, useRef, useState } from 'react'

function FocusInput() {
  const [inputs, setInputs] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setInputs(e.target.value) //* controlled input
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Focus on the input </h2>
      <input
        value={inputs}
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="I am auto-focused 🚀"
      />
      <p>Typed: {inputs}</p>
    </div>
  )
}

export default FocusInput
