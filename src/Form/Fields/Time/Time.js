import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import Input from './../../../Fields/Input/Input'
import Select from './../../../Fields/Select/Select'
import { getTimeFields } from './../../Helpers/time'

const Time = ({ id, initial, label, format, classnamepreFix, ...props }) => {
  return (
    <div
      className={classNames('boomForm-field__content', {
        [`${classnamepreFix}-field__content`]: classnamepreFix
      })}
    >
      {label === undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnamepreFix}__label`]: classnamepreFix
          })}
        >
          {label}
        </label>
      )}
      <div
        className={classNames('boomForm-timePicker__content', {
          [`${classnamepreFix}-timePicker__content`]: classnamepreFix
        })}
      >
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
      </div>
    </div>
  )
}
export default Time
