import React from 'react'
import classNames from 'classnames/bind'
import Checkbox from '../../../Fields/Checkbox/Checkbox'

const MultipleChoice = ({ id, label, options, classNamePreFix, ...props }) => {
  return (
    <div
      className={classNames('boomForm-field__content', {
        [`${classNamePreFix}-field__content`]: classNamePreFix
      })}
    >
      {label !== undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classNamePreFix}__label`]: classNamePreFix
          })}
        >
          {label}
        </label>
      )}
      <div
        className={classNames('boomForm-checkbox__content', {
          [`${classNamePreFix}-checkbox__content`]: classNamePreFix
        })}
      >
        {options.map(({ key, label, value, checked }) => {
          return (
            <label
              className={classNames('boomForm-multipleChoice__item', {
                [`${classNamePreFix}-multipleChoice__item`]: classNamePreFix
              })}
              key={`${id}.${key}`}
            >
              <span>{label}</span>
              <Checkbox
                {...props}
                id={`${id}.${key}`}
                name={`${id}.${key}`}
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
