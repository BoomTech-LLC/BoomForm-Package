import React from 'react'
import Input from '../../../Fields/Input/Input'

const Url = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='url' />
}

export default Url
