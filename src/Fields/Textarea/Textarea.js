import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Textarea = ({ id, initial, validation, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[id]
  const { HTMLValidate } = validation
  const ref = useRef()

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'textarea', validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current && HTMLValidate === true)
      if (possibleError === undefined) ref.current.setCustomValidity("")
      else ref.current.setCustomValidity(possibleError)
  }, [possibleError, HTMLValidate])

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  const onChange = (e) => handleChange({ id, value: e.target.value })

  const onBlur = (e) => {
    if(possibleError && HTMLValidate === true) handleShowNativeValidationMessage(e.target)
    handleBlur({ id })
  }

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <textarea
        {...props}
        value={value || ''}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Memoizeable>
  )
}

export default Textarea
