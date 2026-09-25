import React from 'react'

const Child1 = React.memo(function Child({ onClick }) {
  //   console.log('Prent rendered ? --Child1 rendered')

  return <button onClick={onClick}>Child1 Button</button>
})
export default Child1
