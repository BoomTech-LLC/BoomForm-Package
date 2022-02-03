import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Input = ({ id, type, initial, validation = {}, actions, ...props }) => {
  const { state } = useContext(context)
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

    console.log(`-${id}- changed `, initial)
  }, [id, initial])

  useEffect(() => {
    if (HTMLValidate === true) {
      if (ref.current && errors[id] !== undefined)
        ref.current.setCustomValidity(errors[id])
      else if (ref.current) ref.current.setCustomValidity('')
    }
  }, [ref.current, errors])

  const onChange = (e) => {
    if (HTMLValidate === true)
      handleValidationChange({ e, possibleError: errors[id] })

    handleChange({ id, value: e.target.value })
  }

  const onBlur = (e) => {
    if (HTMLValidate === true)
      handleValidationBlur({ e, possibleError: errors[id] })

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
