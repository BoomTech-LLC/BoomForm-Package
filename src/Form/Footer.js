import React from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'

const Footer = ({ onSubmit, button }) => {
  return (
    <div>
      <SubmitButton onSubmit={onSubmit} button={button} />
    </div>
  )
}

export default Footer
