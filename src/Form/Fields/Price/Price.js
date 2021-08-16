import React from 'react'
import classNames from 'classnames/bind'
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
    <div
      className={classNames('boomForm-field__content', {
        [`${classnamepreFix}-field__content`]: classnamepreFix
      })}
    >
      {label !== undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnamepreFix}__label`]: classnamepreFix
          })}
        >
          {label}
        </label>
      )}
      <div
        className={classNames('boomForm-price__content', {
          [`${classnamepreFix}-price__content`]: classnamepreFix
        })}
      >
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
      </div>
    </div>
  )
}

export default Price
