import React from 'react'

const Child = React.memo(function Child({ onClick }) {
  console.log('Prent rendered ? --Child rendered')

  return <button onClick={onClick}>Child Button</button>
})
export default Child
