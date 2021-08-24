import React, { Fragment } from 'react'
import Input from './../../../Fields/Input/Input'
import {
  getPlaceholder,
  getInitial,
  getValidation
} from './../../Helpers/global'

const Price = ({
  id,
  placeholders,
  initials,
  validations,
  label,
  prefix = '$',
  separator = '.',
  classnamepreFix,
  ...props
}) => {
  return (
    <>
      <span>{prefix}</span>
      <Input
        {...props}
        id={`${id}.first`}
        type='number'
        placeholder={getPlaceholder(placeholders, 'first')}
        initial={getInitial(initials, 'first')}
        validation={getValidation(validations, 'first')}
      />
      <span>{separator}</span>
      <Input
        {...props}
        id={`${id}.last`}
        type='number'
        placeholder={getPlaceholder(placeholders, 'last')}
        initial={getInitial(initials, 'last')}
        validation={getValidation(validations, 'last')}
      />
    </>
  )
}

export default Price
