import React, { Fragment } from 'react'
import Input from './../../../Fields/Input/Input'
import Select from './../../../Fields/Select/Select'
import { getTimeFields } from './../../Helpers/time'

const Time = ({ id, initial, label, format, classnamepreFix, ...props }) => {
  return (
    <>
      {getTimeFields(format).map((item) => {
        const { key, placeholder } = item
        return (
          <Fragment key={`${id}.${key}`}>
            {key !== 'format' && (
              <Input
                {...props}
                id={`${id}.${key}`}
                type='text'
                maxLength='2'
                placeholder={placeholder}
              />
            )}

            {key === 'hour' && <span>:</span>}
            {key === 'format' && (
              <Select
                {...props}
                id={`${id}.${key}`}
                options={[
                  { key: 1, value: 'AM' },
                  { key: 2, value: 'PM' }
                ]}
              />
            )}
          </Fragment>
        )
      })}
    </>
  )
}
export default Time
