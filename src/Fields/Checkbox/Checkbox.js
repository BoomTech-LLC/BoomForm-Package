import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Checkbox = ({ id, initial, validation = {}, actions, ...props }) => {
  const { state } = useContext(context)
  const { handleValidationChange, handleValidationBlur } = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
  const { HTMLValidate } = validation

  useEffect(() => {
    declareField({
      id,
      initial: initial === undefined ? false : initial,
      field: { type: 'checkbox', validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (HTMLValidate === true) {
      if (ref.current && errors[id] !== undefined)
        ref.current.setCustomValidity(errors[id])
      else if (ref.current) ref.current.setCustomValidity('')
    }
  }, [ref.current, errors])

  const value = getFieldValue(values, id)

  const onChange = (e) => {
    if (HTMLValidate === true)
      handleValidationChange({ e, possibleError: errors[id] })

    handleChange({ id, value: e.target.checked })
  }

  const onBlur = (e) => {
    if (HTMLValidate === true)
      handleValidationBlur({ e, possibleError: errors[id] })

    handleBlur({ id })
  }

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <input
        {...props}
        ref={ref}
        type='checkbox'
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Memoizeable>
  )
}

export default Checkbox
