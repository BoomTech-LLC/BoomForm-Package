import React, { useContext, useEffect } from 'react'
import context from '../../../Store/Context'
import { getHiddenIds } from '../../../Helpers/logic'

const SubmitButton = ({ onSubmit, button, isLogicOn, logic, setLogicIds }) => {
  const { state, actions } = useContext(context)
  const { values, fields } = state

  useEffect(() => {
    setLogicIds(isLogicOn ? getHiddenIds({ logic, values }) : null)
  }, [logic, isLogicOn, values])

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
