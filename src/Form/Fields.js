import React, { memo, Fragment } from 'react'
import Field from './Field'
import { getPrintableFields } from './../Helpers/global'

const Fields = ({ fields, paginationIds, logicIds }) => {
  const printableFields = getPrintableFields(fields, logicIds, paginationIds)

  return (
    <div className='boomForm-fields'>
      {fields.map((field) => {
        const { id } = field

        if (!printableFields.includes(id)) return null

        return <Field key={id} {...field} />
      })}
    </div>
  )
}

export default memo(Fields)
