import React from 'react'
import { BoomForm, Input } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Input id='1' type='text' />
      <State />
    </BoomForm>
  )
}

export default App
