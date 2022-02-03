import React, { useContext } from 'react'
import { Context } from 'boomform'

const State = ({ actions }) => {
  const { state } = useContext(Context)
  console.log(state)
  return null
  // return (
  //   <>
  //     <div onClick={() => setX((x) => !x)}>Revert</div>
  //     <div onClick={() => handleReset()}>Reset</div>
  //   </>
  // )
}

export default State
