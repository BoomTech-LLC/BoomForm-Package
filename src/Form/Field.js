import React from 'react'

// Secondary
import Name from './Fields/Name/Name'
import Address from './Fields/Address/Address'
import MultipleChoice from './Fields/MultipleChoice/MultipleChoice'
import SingleChoice from './Fields/SingleChoice/SingleChoice'
import Text from './Fields/Text/Text'
import Email from './Fields/Email/Email'
import Url from './Fields/Url/Url'
import Phone from './Fields/Phone/Phone'
import Password from './Fields/Password/Password'
import Number from './Fields/Number/Number'
import Select from './Fields/Select/Select'
import Price from './Fields/Price/Price'
import File from './Fields/File/File'
import Signature from './Fields/Signature/Signature'

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
    case 'text':
      return <Text {...props} />
    case 'email':
      return <Email {...props} />
    case 'url':
      return <Url {...props} />
    case 'phone':
      return <Phone {...props} />
    case 'password':
      return <Password {...props} />
    case 'number':
      return <Number {...props} />
    case 'select':
      return <Select {...props} />
    case 'price':
      return <Price {...props} />
    case 'file':
      return <File {...props} />
    case 'signature':
      return <Signature {...props} />
    default:
      return null
  }
}

export default Field
