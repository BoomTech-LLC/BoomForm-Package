import React from 'react'
import { BoomForm, Input } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Input
        id='11'
        type='text'
        onChange={({ handleChange }) => {
          handleChange({
            id: 2,
            value: 123
          })
        }}
        validation={{ required: { msg: "This field is required" } }}
        placeholder="Required field"
      />
      <Input id='2' type='text' validation={{ email: { msg: "Incorrect e-mail" } }} placeholder="email" />
      <State />
    </BoomForm>
  )
}

export default App
