import React from 'react'
import Field from './Field'

const Fields = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        const { id } = field
        return <Field key={id} {...field} />
      })}
    </div>
  )
}

export default Fields
