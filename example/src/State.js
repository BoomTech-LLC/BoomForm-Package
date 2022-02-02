import React, { useContext } from 'react'
import { Context } from 'boomform'

const State = ({ setX }) => {
  const { state, actions } = useContext(Context)
  const { handleReset } = actions

  return (
    <>
      <div onClick={() => setX((x) => !x)}>Revert</div>
      <div onClick={() => handleReset()}>Reset</div>
    </>
  )
}

export default State
