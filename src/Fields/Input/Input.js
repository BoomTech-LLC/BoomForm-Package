import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Input = ({
  id,
  type,
  initial,
  validation = {},
  match = {},
  ...props
}) => {
  const { state, actions } = useContext(context)
  const ref = useRef()
  const { handleValidationChange, handleValidationBlur } =
    useNativeValidationMessage()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
  const { HTMLValidate } = validation

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type, validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (!HTMLValidate || !ref.current) return
    if (match?.id) {
      if (values[id] !== values[match.id]) {
        ref.current.setCustomValidity(match?.msg || '')
      } else {
        ref.current.setCustomValidity('')
      }
    } else if (errors?.[id] !== undefined) {
      ref.current.setCustomValidity(errors[id])
    } else {
      ref.current.setCustomValidity('')
    }
  }, [ref.current, errors])

  const onChange = (e) => {
    if (HTMLValidate === true)
      handleValidationChange({ e, possibleError: errors[id] })

    handleChange({ id, value: e.target.value, event: { ...e }, ref })
  }

  const onBlur = (e) => {
    if (HTMLValidate === true)
      handleValidationBlur({ e, possibleError: errors[id] })

    handleBlur({ id, value: e.target.value })
  }

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  return (
    <input
      {...props}
      type={type}
      ref={ref}
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default Input
