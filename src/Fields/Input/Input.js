import React, { useEffect, useContext, useState } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'

const Input = ({ id, type, initial, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values } = state
  const [validationMessageIsShown, setValidationMessageIsShown] = useState(false)

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({ id, initial: actualInitial, field: { type, ...props } })
  }, [id, initial])

  const value = getFieldValue(values, id)
  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, type, initial, value, ...props }}>
      <input
        {...props}
        type={type}
        value={value || ''}
        onChange={(e) => {
          handleChange({
            id,
            value: e.target.value
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
            value: e.target.value,
            e,
            field: { id, initial, type, ...props }
          })
        }
        required
      />
    </Memoizeable>
  )
}

export default Input
