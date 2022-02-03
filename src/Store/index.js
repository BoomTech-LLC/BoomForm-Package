import React, { useReducer, useMemo } from 'react'
import Context from './Context'
import { reduser } from './Reducer'
import { DECLARE_FIELD, EDIT_FIELD, RESET_FORM, SET_TOUCHED } from './Types'

const Store = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reduser, {
    fields: [],
    values: {},
    touched: {},
    errors: {},
    ...props
  })

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
          handleClick
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
      }, [])}
    </Context.Provider>
  )
}

export default Store
