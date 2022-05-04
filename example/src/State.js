import React, { useContext } from 'react'
import { Context, useField } from 'boomform'

const State = ({ actions }) => {
  const x = useContext(Context)
  console.log('x', x)
  return null
}

export default State
