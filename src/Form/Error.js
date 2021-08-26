import React, { useContext, memo } from 'react'
import context from './../Store/Context'
import classNames from 'classnames/bind'

const getErrorByType = (id, type, errors, touched) => {
  switch (type) {
    case 'name':
      if (
        errors[`${id}.first`] !== undefined &&
        touched[`${id}.first`] === true
      )
        return errors[`${id}.first`]
      if (
        errors[`${id}.middle`] !== undefined &&
        touched[`${id}.middle`] === true
      )
        return errors[`${id}.middle`]

      if (errors[`${id}.last`] !== undefined && touched[`${id}.last`] === true)
        return errors[`${id}.last`]
      return null

    case 'address':
      if (
        errors[`${id}.street`] !== undefined &&
        touched[`${id}.street`] === true
      )
        return errors[`${id}.street`]

      if (
        errors[`${id}.street2`] !== undefined &&
        touched[`${id}.street2`] === true
      )
        return errors[`${id}.street2`]

      if (errors[`${id}.city`] !== undefined && touched[`${id}.city`] === true)
        return errors[`${id}.city`]

      if (
        errors[`${id}.state`] !== undefined &&
        touched[`${id}.state`] === true
      )
        return errors[`${id}.state`]

      if (errors[`${id}.zip`] !== undefined && touched[`${id}.zip`] === true)
        return errors[`${id}.zip`]

      if (
        errors[`${id}.country`] !== undefined &&
        touched[`${id}.country`] === true
      )
        return errors[`${id}.country`]

      return null

    case 'price':
      if (
        errors[`${id}.first`] !== undefined &&
        touched[`${id}.first`] === true
      )
        return errors[`${id}.first`]

      if (errors[`${id}.last`] !== undefined && touched[`${id}.last`] === true)
        return errors[`${id}.last`]

    case 'time':
      if (
        errors[`${id}.format`] !== undefined &&
        touched[`${id}.format`] === true
      )
        return errors[`${id}.format`]

      if (errors[`${id}.hour`] !== undefined && touched[`${id}.hour`] === true)
        return errors[`${id}.hour`]

      if (
        errors[`${id}.minute`] !== undefined &&
        touched[`${id}.minute`] === true
      )
        return errors[`${id}.minute`]

      return null

    default:
      return errors[id] !== undefined && touched[id] === true
        ? errors[id]
        : null
  }
}

const Error = ({ classnameprefix, id, type }) => {
  const { state } = useContext(context)
  const { errors, touched } = state

  const possibleError = getErrorByType(id, type, errors, touched)
  if (possibleError === null) return null

  return (
    <div
      className={classNames(`boomForm-field__error`, {
        [`${classnameprefix}-field__error`]: classnameprefix
      })}
    >
      {possibleError}
    </div>
  )
}

export default memo(Error)
