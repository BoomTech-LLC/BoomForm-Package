import React, { useEffect, useContext } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'

const Radio = ({ id, initial, name, value: radioValue, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values } = state

  useEffect(() => {
    const actualInitial = {
      checked: initial === undefined ? false : initial,
      value: radioValue
    }
    declareField({
      id,
      initial: actualInitial,
      field: { name, type: 'radio', value: radioValue, ...props }
    })
  }, [id, initial])

  const value = getFieldValue(values, id)

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, name, value: value.checked, ...props }}>
      <input
        {...props}
        type='radio'
        name={name}
        checked={value.checked}
        onChange={(e) => {
          handleChange({
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
        }}
        onBlur={(e) =>
          handleBlur({
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
