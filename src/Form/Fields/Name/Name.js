import React, { Fragment } from 'react'
import Input from './../../../Fields/Input/Input'
import {
  getPlaceholder,
  getInitial,
  getValidation
} from './../../Helpers/global'
import { getNameFields } from './../../Helpers/name'

const Name = ({
  id,
  label,
  middleName,
  classnameprefix,
  placeholders,
  initials,
  validations,
  ...props
}) => {
  const fields = getNameFields(middleName)

  return (
    <>
      {fields.map((item) => (
        <Input
          {...props}
          key={`${id}.${item}`}
          id={`${id}.${item}`}
          type='text'
          placeholder={getPlaceholder(placeholders, item)}
          initial={getInitial(initials, item)}
          validation={getValidation(validations, item)}
        />
      ))}
    </>
  )
}

export default Name
