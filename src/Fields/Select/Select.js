import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Select = ({ id, initial, options, validation = {}, ...props }) => {
  const { state, actions } = useContext(context)
  const handleShowNativeValidationMessage = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors } = state
  const { HTMLValidate = false } = validation
  const possibleError = errors[id]

  if (!options) throw new Error('select should have a options attribute')

  const getValueByKey = (neededKey) => {
    const [selectedValue] = options.filter((item) => item.key === neededKey)
    return selectedValue
  }

  useEffect(() => {
    const actualInitial =
      initial === undefined ? options[0] : getValueByKey(initial)
    declareField({
      id,
      initial: actualInitial,
      field: {
        options,
        validation,
        type: 'select',
        ...props
      }
    })
  }, [id, initial])

  useEffect(() => {
    if (ref.current && HTMLValidate === true) {
      if (possibleError === undefined) ref.current.setCustomValidity('')
      else ref.current.setCustomValidity(possibleError)
    }
  }, [possibleError, HTMLValidate])

  const onChange = (e) => {
    const [newValue] = options.filter((item) => e.target.value == item.key)
    handleChange({
      id,
      value: newValue
    })
  }

  const onBlur = (e) => {
    if (possibleError && HTMLValidate === true)
      handleShowNativeValidationMessage(e.target)
    handleBlur({ id })
  }

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  let selectedKey = options[0].key
  if (value.hasOwnProperty('key')) {
    const { key: actualSelectedKey } = value
    selectedKey = actualSelectedKey
  }

  return (
    <Memoizeable field={{ id, initial, options, value, selectedKey, ...props }}>
      <select value={selectedKey} ref={ref} onChange={onChange} onBlur={onBlur}>
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
