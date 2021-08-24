import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Radio from '../../../Fields/Radio/Radio'

const SingleChoice = ({ id, label, options, classnameprefix, ...props }) => {
  return (
    <>
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
    </>
  )
}

export default SingleChoice
