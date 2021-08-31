import React from 'react'
import { BoomForm, Input, Error } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Input id='1' type='text' />
      <Error id='1' />
      <State />
    </BoomForm>
  )
}

export default App
