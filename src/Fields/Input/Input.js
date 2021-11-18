import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'
import md5 from 'md5'

const Input = ({ id, type, initial, ...props }) => {
  const { state, actions } = useContext(context)
  const ref = useRef()
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[id]
  const pattern = possibleError === undefined ? possibleError : md5(values[id] || '')

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({ id, initial: actualInitial, field: { type, ...props } })
  }, [id, initial])

  useEffect(() => {
    if (ref.current) {
      if (possibleError === undefined) {
        ref.current.setCustomValidity("")
      } else {
        ref.current.setCustomValidity(possibleError)
      }
    }
  }, [possibleError])

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  const blurHandler = (e) => {
    if (possibleError) {
      handleShowNativeValidationMessage(e.target)
    }

    handleBlur({ id })
  }

  return (
    <Memoizeable field={{ id, type, initial, value, ...props }}>
      <input
        {...props}
        type={type}
        ref={ref}
        value={value || ''}
        onChange={(e) => {
          handleChange({ id, value: e.target.value })
        }}
        onBlur={blurHandler}
        onClick={(e) =>
          handleClick({
            id,
            value: e.target.value,
            e,
            field: { id, initial, type, ...props }
          })
        }
        pattern={pattern}
      />
    </Memoizeable>
  )
}

export default Input
