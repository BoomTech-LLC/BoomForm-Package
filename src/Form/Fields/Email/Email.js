import React, { Fragment } from 'react'
import Input from '../../../Fields/Input/Input'

const Email = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='email' />
}

export default Email
