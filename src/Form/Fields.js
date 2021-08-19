import React, { memo } from 'react'
import Field from './Field'

const Fields = ({ fields, paginationIds }) => {
  console.log('paginationIds', paginationIds)

  return (
    <div>
      {fields.map((field) => {
        const { id } = field
        return <Field key={id} {...field} />
      })}
    </div>
  )
}

export default memo(Fields)
