import React, { useContext, useEffect } from 'react'
import Star from './Star'
import Circle from './Circle'
import classNames from 'classnames/bind'
import { getFieldValue } from '../../../Helpers/global'
import context from '../../../Store/Context'

const StarRating = ({
  id,
  initial,
  label,
  hideLabel,
  count = 5,
  shape,
  color,
  area,
  zoom = 40,
  classnameprefix,
  ...props
}) => {
  const { state, actions } = useContext(context)
  const { handleChange, declareField } = actions
  const { values } = state

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'starRating', ...props }
    })
  }, [id, initial])

  const value = getFieldValue(values, id)

  if (value === undefined) return null

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
        className={classNames('boomForm-rating__content', {
          [`${classnameprefix}-rating__content`]: classnameprefix
        })}
      >
        {Array.from({ length: count }, (item, index) => {
          return shape === 'circle' ? (
            <Circle
              click={(e) =>
                handleChange({
                  id,
                  value: index + 1,
                  e,
                  field: { id, initial, ...props }
                })
              }
              value={value || ''}
              index={index}
              key={index}
              color={color}
              zoom={zoom}
            />
          ) : (
            <Star
              click={(e) =>
                handleChange({
                  id,
                  value: index + 1,
                  e,
                  field: { id, initial, ...props }
                })
              }
              key={index}
              value={value || ''}
              index={index}
              color={color}
              zoom={zoom}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StarRating
