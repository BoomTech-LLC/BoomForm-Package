import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Barev'
        }}
        fields={[
          {
            id: 1,
            type: 'address',
            validation: { required: { msg: 'Sxala' } }
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
