import React from 'react'
import classNames from 'classnames/bind'
import Radio from '../../../Fields/Radio/Radio'

const ScaleRating = ({
  id,
  label,
  hideLabel,
  max = 5,
  min = 0,
  preFix,
  postFix,
  classnameprefix,
  ...props
}) => {
  return (
    <div
      className={classNames('boomForm-field__content', {
        [`${classnameprefix}-field__content`]: classnameprefix
      })}
    >
      {!hideLabel && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnameprefix}__label`]: classnameprefix
          })}
        >
          {label}
        </label>
      )}
      <div
        className={classNames('boomForm-scaleRating__content', {
          [`${classnameprefix}-scaleRating__content`]: classnameprefix
        })}
      >
        <span>{preFix}</span>
        <div
          className={classNames('boomForm-scaleRating-option__content', {
            [`${classnameprefix}-scaleRating-option__content`]: classnameprefix
          })}
        >
          {Array.from(
            { length: max + 1 },
            (val, index) => index >= min && index
          ).map((item, i) => {
            if (item === false) return
            return (
              <Radio
                key={item}
                id={`${id}.${i}`}
                value={`${id}.${i}`}
                name={id}
                {...props}
              />
            )
          })}
        </div>
        <span>{postFix}</span>
      </div>
    </div>
  )
}

export default ScaleRating
