import React from 'react'
import classNames from 'classnames/bind'
import Input from '../../../Fields/Input/Input'

const Password = ({ label, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-password__content', {
          [`${classnameprefix}-email__content`]: classnameprefix
        })}
      >
        <Input {...props} type='password' />
      </div>
    </div>
  )
}

export default Password
