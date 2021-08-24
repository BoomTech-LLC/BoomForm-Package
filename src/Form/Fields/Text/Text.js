import React from 'react'
import Input from '../../../Fields/Input/Input'

const Text = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='text' />
}

export default Text
