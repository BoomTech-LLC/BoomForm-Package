import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'
import { checkFieldValidationExisting } from '../../Helpers/checkFieldValidationExisting'

const Checkbox = ({ id, initial, value: checkboxValue, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[props.name]

  useEffect(() => {
    const actualInitial = {
      checked: initial === undefined ? false : initial,
      value: checkboxValue
    }

    declareField({
      id,
      initial: actualInitial,
      field: { type: 'checkbox', value: checkboxValue, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current) {
      if (possibleError === undefined) ref.current.setCustomValidity('')
      else ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError])

  const value = getFieldValue(values, id)

  const onBlur = (e) => {
    if (possibleError) handleShowNativeValidationMessage(e.target)
    handleBlur({ id })
  }

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <input
        {...props}
        ref={ref}
        type='checkbox'
        checked={value.checked}
        onChange={(e) => {
          handleChange({
            id,
            value: {
              checked: e.target.checked,
              value: checkboxValue
            }
          })
        }}
        onBlur={onBlur}
      />
    </Memoizeable>
  )
}

export default Checkbox
