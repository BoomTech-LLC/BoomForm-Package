import React from 'react'
import Pagination from './Pagination/Header/Pagination'

const Header = ({ name, description, ...props }) => {
  return (
    <div className='boomForm__header'>
      <div className='boomForm__name'>{name}</div>
      <div className='boomForm__description'>{description}</div>
      <Pagination {...props} />
    </div>
  )
}

export default Header
