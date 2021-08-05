import React from 'react'

const Header = ({ name, description }) => {
  return (
    <div>
      <div className='boomForm__name'>{name}</div>
      <div className='boomForm__description'>{description}</div>
    </div>
  )
}

export default Header
