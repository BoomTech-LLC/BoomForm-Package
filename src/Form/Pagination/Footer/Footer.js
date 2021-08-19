import React from 'react'
import Buttons from './Buttons/Buttons'
import Numbers from './Buttons/Numbers'

const Footer = ({ navigation, ...props }) => {
  if (navigation === 'buttons') return <Buttons {...props} />
  else return <Numbers {...props} />
}

export default Footer
