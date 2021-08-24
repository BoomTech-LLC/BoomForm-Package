import React from 'react'
import classNames from 'classnames/bind'
import Input from '../../../Fields/Input/Input'

const Password = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='password' />
}

export default Password
