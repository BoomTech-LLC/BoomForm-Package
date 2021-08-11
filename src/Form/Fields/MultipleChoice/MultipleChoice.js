import React from 'react'
import classNames from 'classnames/bind'
import Checkbox from '../../../Fields/Checkbox/Checkbox'

const MultipleChoice = ({ id, label, options, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-checkbox__content', {
          [`${classnameprefix}-checkbox__content`]: classnameprefix
        })}
      >
        {options.map(({ key, label, value, checked }) => {
          return (
            <label
              className={classNames('boomForm-multipleChoice__item', {
                [`${classnameprefix}-multipleChoice__item`]: classnameprefix
              })}
              key={`${id}.${key}`}
            >
              <span>{label}</span>
              <Checkbox
                {...props}
                id={`${id}.${key}`}
                name={id}
                value={value}
                initial={checked ? true : false}
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default MultipleChoice
