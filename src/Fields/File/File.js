import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const File = ({ id, initial, validation, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[id]
  const { HTMLValidate } = validation

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'file', validation, ...props }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current && HTMLValidate === true) {
      if (possibleError === undefined) ref.current.setCustomValidity("")
      else ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError, HTMLValidate])

  const value = getFieldValue(values, id)

  const onBlur = (e) => {
    handleShowNativeValidationMessage(e.target)

    handleBlur({ id })
  }

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <input
        {...props}
        ref={ref}
        type='file'
        onChange={(e) => {
          handleChange({
            id,
            value: e.target.files
          })
        }}
        onBlur={onBlur}
        onClick={(e) =>
          handleClick({
            id,
            value: e.target.files,
            e,
            field: { id, initial, type: 'file', ...props }
          })
        }
      />
    </Memoizeable>
  )
}

export default File
