import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Checkbox from '../../../Fields/Checkbox/Checkbox'

const MultipleChoice = ({ id, label, options, classnameprefix, ...props }) => {
  return (
    <>
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
    </>
  )
}

export default MultipleChoice
