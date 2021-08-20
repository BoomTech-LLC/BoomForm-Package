import React, { useContext, useEffect } from 'react'
import context from '../../../Store/Context'
import { getHiddenIds } from '../../../Helpers/logic'

const SubmitButton = ({
  onSubmit,
  button,
  isLogicOn,
  logic,
  setLogicIds,
  hide
}) => {
  const { state, actions } = useContext(context)
  const { values } = state
  useEffect(() => {
    setLogicIds(isLogicOn ? getHiddenIds({ logic, values }) : [])
  }, [logic, isLogicOn, values])

  if (hide) return null

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
