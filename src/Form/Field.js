import React from 'react'

// Secondary
import Name from './Fields/Name/Name'
import Address from './Fields/Address/Address'

const Field = ({ type, ...props }) => {
  switch (type) {
    case 'name':
      return <Name {...props} />
    case 'address':
      return <Address {...props} />
    default:
      return null
  }
}

export default Field
