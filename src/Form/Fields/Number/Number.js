import React from 'react'
import classNames from 'classnames/bind'
import Input from '../../../Fields/Input/Input'

const Number = ({ label, classnameprefix, ...props }) => {
  return <Input {...props} type='number' />
}

export default Number
