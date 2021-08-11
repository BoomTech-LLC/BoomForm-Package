import React from 'react'

// Secondary
import Name from './Fields/Name/Name'
import Address from './Fields/Address/Address'
import MultipleChoice from './Fields/MultipleChoice/MultipleChoice'
import SingleChoice from './Fields/SingleChoice/SingleChoice'

const Field = ({ type, ...props }) => {
  switch (type) {
    case 'name':
      return <Name {...props} />
    case 'address':
      return <Address {...props} />
    case 'multipleChoice':
      return <MultipleChoice {...props} />
    case 'singleChoice':
      return <SingleChoice {...props} />
    default:
      return null
  }
}

export default Field
