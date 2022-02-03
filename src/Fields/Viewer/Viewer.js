import React, { useContext } from 'react'
import context from './../../Store/Context'
import Memoizeable from '../../Memoizeable'

const Custom = ({ id, initial, children, actions, ...props }) => {
  const { state } = useContext(context)
  const { handleChange, handleBlur, handleClick, declareField } = actions
  const { values, errors, fields, touched } = state

  return (
    <Memoizeable
      field={{
        children,
        values,
        errors,
        fields,
        touched,
        ...props
      }}
    >
      {children({
        handleChange,
        handleBlur,
        handleClick,
        values,
        errors,
        fields,
        touched
      })}
    </Memoizeable>
  )
}

export default Custom
