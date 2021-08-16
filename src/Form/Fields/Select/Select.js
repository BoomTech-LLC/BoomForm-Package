import React from 'react'
import classNames from 'classnames/bind'
import PrimarySelect from '../../../Fields/Select/Select'

const Select = ({ label, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-select__content', {
          [`${classnameprefix}-select__content`]: classnameprefix
        })}
      >
        <PrimarySelect {...props} />
      </div>
    </div>
  )
}

export default Select
