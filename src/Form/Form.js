import React, { useContext } from 'react'
import context from '../Store/Context'
import Header from './Header'
import Footer from './Footer'
import Fields from './Fields'

const Form = ({ global, fields }) => {
  const { state, actions } = useContext(context)
  const { name, description, button, onSubmit } = global

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit({ state, actions })
  }

  return (
    <form className='boomForm' onSubmit={handleSubmit} noValidate>
      <Header name={name} description={description} />
      <Fields fields={fields} />
      <Footer button={button} />
    </form>
  )
}

export default Form
