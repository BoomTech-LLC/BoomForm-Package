import React, { useContext } from 'react'
import { Context, useField } from 'boomform'

const State = ({ actions }) => {
  const field = useField(['1', '2'])
  console.log(field)
  return null
}

export default State
