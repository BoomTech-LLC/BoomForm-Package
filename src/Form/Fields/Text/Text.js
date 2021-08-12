import React from 'react'
import Input from '../../../Fields/Input/Input'
import classNames from 'classnames/bind'

const Text = ({ label, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-text__content', {
          [`${classnameprefix}-text__content`]: classnameprefix
        })}
      >
        <Input {...props} type='text' />
      </div>
    </div>
  )
}

export default Text
