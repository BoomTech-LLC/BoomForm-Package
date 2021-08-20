import React from 'react'
import classNames from 'classnames/bind'

const Custom = ({ id, component, label, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-custom__content', {
          [`${classnameprefix}-email__content`]: classnameprefix
        })}
      >
        {component({ id, ...props })}
      </div>
    </div>
  )
}

export default Custom
