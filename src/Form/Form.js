import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Fields from './Fields'

const Form = ({ global, fields }) => {
  const { name, description, button } = global

  return (
    <form className='boomForm' noValidate>
      <Header name={name} description={description} />
      <Fields fields={fields} />
      <Footer button={button} />
    </form>
  )
}

export default Form
