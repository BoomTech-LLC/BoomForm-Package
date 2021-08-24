import React, { useContext, useEffect, Fragment } from 'react'
import Star from './Star'
import Circle from './Circle'
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
    <>
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
    </>
  )
}

export default StarRating
