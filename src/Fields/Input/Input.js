import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Input = ({ id, type, initial, validation = {}, ...props }) => {
  const { state, actions } = useContext(context)
  const ref = useRef()
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[id]
  const { HTMLValidate = false } = validation

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type, validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current && HTMLValidate === true) {
      if (possibleError === undefined) ref.current.setCustomValidity('')
      else ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError, HTMLValidate])

  const onChange = (e) => handleChange({ id, value: e.target.value })

  const onBlur = (e) => {
    if (possibleError && HTMLValidate === true) {
      handleShowNativeValidationMessage(e.target)
    }
    handleBlur({ id })
  }

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, type, initial, value, ...props }}>
      <input
        {...props}
        type={type}
        ref={ref}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Memoizeable>
  )
}

export default Input
