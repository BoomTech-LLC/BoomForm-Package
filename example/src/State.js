import React, { useContext } from 'react'
import { Context, useField } from 'boomform'

const State = ({ actions }) => {
  const data = useField(['1', '3'])
  console.log('State:', data)
  return null
}

export default State
