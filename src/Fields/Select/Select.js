import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Select = ({ id, initial, options, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors } = state
  const possibleError = errors[id]
  const isRequired = possibleError === undefined ? false : true

  const getValueByKey = (neededKey) => {
    const [selectedValue] = options.filter((item) => item.key === neededKey)
    return selectedValue
  }

  if (!options) throw new Error('select should have a options attribute')

  useEffect(() => {
    const actualInitial =
      initial === undefined ? options[0] : getValueByKey(initial)
    declareField({
      id,
      initial: actualInitial,
      field: {
        options,
        type: 'select',
        ...props
      }
    })
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

  const blurHandler = (e) => {
    const [newValue] = options.filter((item) => e.target.value == item.key)

    handleShowNativeValidationMessage(e.target)

    handleBlur({ id })
  }

  if (value === undefined) return null

  let selectedKey = options[0].key
  if (value.hasOwnProperty('key')) {
    const { key: actualSelectedKey } = value
    selectedKey = actualSelectedKey
  }

  return (
    <Memoizeable field={{ id, initial, options, value, selectedKey, ...props }}>
      <select
        value={selectedKey}
        ref={ref}
        onChange={(e) => {
          const [newValue] = options.filter(
            (item) => e.target.value == item.key
          )
          if (possibleError) handleShowNativeValidationMessage(e.target)
          handleChange({
            id,
            value: newValue
          })
        }}
        onBlur={blurHandler}
        onClick={(e) => {
          const [newValue] = options.filter(
            (item) => e.target.value == item.key
          )
          handleClick({
            id,
            value: newValue,
            e,
            field: { id, initial, options, type: 'select', ...props }
          })
        }}
        required={isRequired}
      >
        {options.map((option, index) => {
          const { value: optionValue, label, key: optionKey } = option

          return (
            <option key={index} value={optionKey} name={optionValue}>
              {label || optionValue}
            </option>
          )
        })}
      </select>
    </Memoizeable>
  )
}

export default Select
