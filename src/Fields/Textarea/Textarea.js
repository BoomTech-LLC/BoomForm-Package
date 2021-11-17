import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'
import md5 from 'md5'

const Textarea = ({ id, initial, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const possibleError = errors[id]
  const ref = useRef()

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'textarea', ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (possibleError) {
      ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError, ref])

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  const blurHandler = (e) => {
    handleShowNativeValidationMessage(e.target)

    handleBlur({ id })
  }

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <textarea
        {...props}
        value={value || ''}
        ref={ref}
        onChange={(e) => {
          handleChange({
            id,
            value: e.target.value
          })
        }}
        onBlur={blurHandler}
        onClick={(e) =>
          handleClick({
            id,
            value: e.target.value,
            e,
            field: { id, initial, type: 'textarea', ...props }
          })
        }
        // required={Boolean(possibleError)}
      />
    </Memoizeable>
  )
}

export default Textarea
