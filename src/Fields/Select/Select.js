import React, { useEffect, useContext } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'

const Select = ({ id, initial, options, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values } = state

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

  const value = getFieldValue(values, id)

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
        onChange={(e) => {
          const [newValue] = options.filter(
            (item) => e.target.value == item.key
          )
          handleChange({
            id,
            value: newValue,
            e,
            field: { id, initial, options, type: 'select', ...props }
          })
        }}
        onBlur={(e) => {
          const [newValue] = options.filter(
            (item) => e.target.value == item.key
          )
          handleBlur({
            id,
            value: newValue,
            e,
            field: { id, initial, options, type: 'select', ...props }
          })
        }}
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
      >
        {options.map((option, index) => {
          const { value: optionValue, key: optionKey } = option
          return (
            <option key={index} value={optionKey} name={optionValue}>
              {optionValue}
            </option>
          )
        })}
      </select>
    </Memoizeable>
  )
}

export default Select
