import React from 'react'
import classNames from 'classnames/bind'
import Input from './../../../Fields/Input/Input'
import Select from './../../../Fields/Select/Select'
import {
  getPlaceholder,
  getInitial,
  getValidation
} from './../../Helpers/global'
import { getAddressFields, countryList } from './../../Helpers/address'

const Address = ({
  id,
  label,
  hide,
  classnameprefix,
  placeholders,
  initials,
  validations,
  ...props
}) => {
  const fields = getAddressFields()

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
        className={classNames('boomForm-address__content', {
          [`${classnameprefix}-address__content`]: classnameprefix
        })}
      >
        {fields.map((item) => {
          if (hide?.includes(item)) return null
          if (item === 'country') {
            return (
              <Select
                {...props}
                key={`${id}.${item}`}
                id={`${id}.${item}`}
                options={countryList}
              />
            )
          }
          return (
            <Input
              {...props}
              key={`${id}.${item}`}
              id={`${id}.${item}`}
              type='text'
              placeholder={getPlaceholder(placeholders, item)}
              initial={getInitial(initials, item)}
              validation={getValidation(validations, item)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Address
