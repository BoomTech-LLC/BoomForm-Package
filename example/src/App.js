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
            type: 'time',
            validations: {
              hour: { required: { msg: 'Sxala' } },
              minute: { required: { msg: 'Sxala' } }
            }
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
