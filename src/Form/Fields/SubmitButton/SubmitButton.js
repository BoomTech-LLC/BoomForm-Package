import React, { useContext } from 'react'
import context from '../../../Store/Context'

const SubmitButton = ({ onSubmit, button }) => {
  const { state, actions } = useContext(context)
  const handleClick = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ state, actions })
    else console.log({ state, actions })
  }

  return (
    <div>
      <button onClick={handleClick}>{button}</button>
    </div>
  )
}

export default SubmitButton
