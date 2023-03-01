import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Textarea = ({ id, initial, validation = {}, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleValidationChange, handleValidationBlur } =
    useNativeValidationMessage()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
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
    if (HTMLValidate === true) {
      if (ref.current && errors[id] !== undefined)
        ref.current.setCustomValidity(errors[id])
      else if (ref.current) ref.current.setCustomValidity('')
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

    handleBlur({ id })
  }

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  return (
    <textarea
      {...props}
      value={value || ''}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default Textarea
