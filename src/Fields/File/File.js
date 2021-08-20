import React, { useEffect, useContext } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'

const File = ({ id, initial, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values } = state

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'file', ...props }
    })
  }, [id, initial])

  const value = getFieldValue(values, id)

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, value, ...props }}>
      <input
        {...props}
        type='file'
        onChange={(e) => {
          handleChange({
            id,
            value: e.target.files,
            e,
            field: { id, initial, type: 'file', ...props }
          })
        }}
        onBlur={(e) =>
          handleBlur({
            id,
            value: e.target.files,
            e,
            field: { id, initial, type: 'file', ...props }
          })
        }
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
