import React, { useEffect, useState } from 'react'

function TrackMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(()=>{
    const mouseTracker=()=>{
        setPosition({x:})
    }
  },[])

  return (
    <div>
      <h2>Track Mouse Position</h2>
      <p>
        x: {position.x} y:{position.y}
      </p>
    </div>
  )
}

export default TrackMousePosition
