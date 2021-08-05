import React from 'react'
import classNames from 'classnames/bind'
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
    <div
      className={classNames('boomForm-field__content', {
        [`${classnameprefix}-field__content`]: classnameprefix
      })}
    >
      {label !== undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnameprefix}__label`]: classnameprefix
          })}
        >
          {label}
        </label>
      )}
      <div
        className={classNames('boomForm-name__content', {
          [`${classnameprefix}-name__content`]: classnameprefix
        })}
      >
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
      </div>
    </div>
  )
}

export default Name
