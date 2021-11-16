import React, { useEffect, useContext, useState } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'

const Checkbox = ({ id, initial, value: checkboxValue, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values } = state
  const [validationMessageIsShown, setValidationMessageIsShown] = useState(false)

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

  const value = getFieldValue(values, id)

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <input
        {...props}
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
        onBlur={(e) => {
          if (!validationMessageIsShown) {
            e.target.reportValidity()
          }

          setValidationMessageIsShown(validationMessageIsShown => !validationMessageIsShown)

          handleBlur({ id })
        }
        }
        onClick={(e) =>
          handleClick({
            id,
            value: {
              checked: e.target.checked,
              value: checkboxValue
            },
            e,
            field: {
              id,
              initial,
              value: checkboxValue,
              type: 'checkbox',
              ...props
            }
          })
        }
      />
    </Memoizeable>
  )
}

export default Checkbox
