import React, { useReducer, useMemo, useEffect } from 'react'
import Context from './Context'
import { reduser, SCS } from './Reducer'
import {
  DECLARE_FIELD,
  EDIT_FIELD,
  RESET_FORM,
  SET_TOUCHED,
  DECLARE_FIELDS,
  UPDATE_ID,
  DELETE_FIELD
} from './Types'

const Store = ({ children, initials, ...props }) => {
  const [state, dispatch] = useReducer(reduser, {
    fields: [],
    values: {},
    touched: {},
    errors: {}
  })

  useEffect(() => declareFields(initials), [initials])
  useEffect(() => {
    SCS(state)
  }, [])

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

  const declareFields = (payload) => {
    dispatch({
      type: DECLARE_FIELDS,
      payload
    })
  }

  const handleChange = ({ id, value, event, ref }) => {
    dispatch({
      type: EDIT_FIELD,
      payload: {
        id,
        value,
        handleChange,
        event,
        ref
      }
    })
  }

  const getAndChange = (func) => handleChange(func(state))

  const handleBlur = ({ id, value }) => {
    dispatch({
      type: SET_TOUCHED,
      payload: { id, value, handleBlur }
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

  const updateId = ({ oldId, newId }) => {
    dispatch({
      type: UPDATE_ID,
      payload: {
        oldId,
        newId
      }
    })
  }
  const deleteField = (id) => {
    dispatch({
      type: DELETE_FIELD,
      payload: {
        id
      }
    })
  }

  return (
    <Context.Provider
      value={{
        state,
        actions: {
          declareField,
          declareFields,
          handleReset,
          handleChange,
          handleBlur,
          handleClick,
          getAndChange,
          updateId,
          deleteField
        }
      }}
    >
      {useMemo(() => {
        return children({
          declareField,
          declareFields,
          handleReset,
          handleChange,
          handleBlur,
          handleClick,
          updateId,
          deleteField
        })
      }, Object.values(props))}
    </Context.Provider>
  )
}

export default Store
