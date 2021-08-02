import { useContext } from 'react'
import { Context } from 'boomform'

const State = () => {
  const { state } = useContext(Context)

  console.log(state)

  return null
}

export default State
