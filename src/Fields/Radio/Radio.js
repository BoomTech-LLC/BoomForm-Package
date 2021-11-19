import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Radio = ({ id, initial, name, value: radioValue, validation, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[props.name]
  const { HTMLValidate } = validation

  useEffect(() => {
    const actualInitial = {
      checked: initial === undefined ? false : initial,
      value: radioValue
    }
    declareField({
      id,
      initial: actualInitial,
      field: { name, type: 'radio', value: radioValue, validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current && HTMLValidate === true) {
      if (possibleError === undefined) ref.current.setCustomValidity("")
      else ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError, HTMLValidate])

  const value = getFieldValue(values, id)

  const blurHandler = (e) => {
    handleShowNativeValidationMessage(e.target)
    handleBlur({ id })
  }

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, name, value: value.checked, ...props }}>
      <input
        {...props}
        ref={ref}
        type='radio'
        name={name}
        checked={value.checked}
        onChange={(e) => {
          handleChange({
            id,
            value: {
              checked: true,
              value: radioValue
            }
          })
        }}
        onBlur={blurHandler}
        onClick={(e) =>
          handleClick({
            id,
            value: {
              checked: true,
              value: radioValue
            },
            e,
            field: {
              id,
              initial,
              name,
              value: radioValue,
              type: 'radio',
              ...props
            }
          })
        }
      />
    </Memoizeable>
  )
}

export default Radio
