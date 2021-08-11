import React from 'react'
import classNames from 'classnames/bind'
import Radio from '../../../Fields/Radio/Radio'

const SingleChoice = ({ id, label, options, classnameprefix, ...props }) => {
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
        className={classNames('boomForm-singleChoice__content', {
          [`${classnameprefix}-singleChoice__content`]: classnameprefix
        })}
      >
        {options.map(({ key, label, value, checked }) => {
          return (
            <label
              className={classNames('boomForm-singleChoice__item', {
                [`${classnameprefix}-singleChoice__item`]: classnameprefix
              })}
              key={`${id}.${key}`}
            >
              <span>{label}</span>
              <Radio
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

export default SingleChoice
