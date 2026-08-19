import React, { useRef, useState } from 'react'

function Stopwatch() {
  const [clock, setClock] = useState(0)
  const clockRef = useRef(null)

  const startTimer = () => {
    if (clockRef.current !== null) return
    clockRef.current = setInterval(() => {
      setClock((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(clockRef.current)
    clockRef.current = null
  }
  const resetTimer = () => {
    stopTimer()
    setClock(0)
  }
  const clockFormat = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{clockFormat(clock)}:sec</p>
      <button style={{ padding: '5px', margin: '5px' }} onClick={startTimer}>
        Start
      </button>
      <button style={{ padding: '5px', margin: '5px' }} onClick={stopTimer}>
        Stop
      </button>
      <button style={{ padding: '5px', margin: '5px' }} onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default Stopwatch
