import React, { Fragment } from 'react'
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
  defaultCountry,
  ...props
}) => {
  const fields = getAddressFields()

  return (
    <>
      {fields.map((item) => {
        if (hide?.includes(item)) return null
        if (item === 'country') {
          return (
            <Select
              {...props}
              key={`${id}.${item}`}
              id={`${id}.${item}`}
              options={countryList}
              initial={defaultCountry}
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
    </>
  )
}

export default Address
