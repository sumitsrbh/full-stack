import React, { useEffect, useRef, useState } from 'react'

function WindowSizeTrack() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const sizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    const handleResize = () => {
      sizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <h2>Tracking window size</h2>
      <p>
        <p>
          State size (re-renders): {size.width} x {size.height}
        </p>
        <p>
          Ref size (no re-render, check console): {sizeRef.current.width} x{' '}
          {sizeRef.current.height}
        </p>
      </p>
    </div>
  )
}

export default WindowSizeTrack
