import React, { useContext } from 'react'
import { Context, useField } from 'boomform'

// const State = ({ actions }) => {
//   const x = useField(['a', 'b'])
//   console.log('x', x)
//   return null
// }
const State = () => {
  const store= useContext(Context)
 
  console.log(store)
 
  return null
}

export default State
