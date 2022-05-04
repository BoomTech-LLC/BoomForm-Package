import React, { useReducer, useMemo, useEffect } from 'react'
import Context from './Context'
import { reduser } from './Reducer'
import { DECLARE_FIELD, EDIT_FIELD, RESET_FORM, SET_TOUCHED } from './Types'

const Store = ({ children, initials, ...props }) => {
  const [state, dispatch] = useReducer(reduser, {
    fields: [],
    values: {},
    touched: {},
    errors: {}
  })

  useEffect(() => {
    if (initials) {
      Object.keys(initials).forEach((key) => {
        const isSelect = typeof initials[key] === 'object'

        declareField({
          id: key,
          initial: initials[key],
          field: {
            type: isSelect ? 'select' : 'non_select'
          }
        })
      })
    }
  }, [initials])

  const declareField = ({ id, initial, field }) => {
    dispatch({
      type: DECLARE_FIELD,
      payload: {
        id,
        initial,
        field
      }
    })
  }

  const handleChange = ({ id, value }) => {
    dispatch({
      type: EDIT_FIELD,
      payload: {
        id,
        value,
        handleChange
      }
    })
  }

  const getAndChange = (func) => handleChange(func(state))

  const handleBlur = ({ id }) => {
    dispatch({
      type: SET_TOUCHED,
      payload: { id, handleBlur }
    })
  }

  const handleClick = ({ id, value, e, field }) => {
    if (field && field.hasOwnProperty('onClick'))
      field.onClick({
        id,
        value,
        e,
        field,
        handleChange: handleChange
      })
  }

  const handleReset = () => {
    dispatch({
      type: RESET_FORM
    })
  }

  return (
    <Context.Provider
      value={{
        state,
        actions: {
          declareField,
          handleReset,
          handleChange,
          handleBlur,
          handleClick,
          getAndChange
        }
      }}
    >
      {useMemo(() => {
        return children({
          declareField,
          handleReset,
          handleChange,
          handleBlur,
          handleClick
        })
      }, Object.values(props))}
    </Context.Provider>
  )
}

export default Store
