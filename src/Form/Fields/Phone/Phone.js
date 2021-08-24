import React from 'react'
import classNames from 'classnames/bind'
import Input from '../../../Fields/Input/Input'

const Phone = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='phone' />
}

export default Phone
