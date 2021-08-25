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
            type: 'name',
            instruction: 'hello'
          },
          {
            id: 2,
            type: 'name'
          },
          {
            id: 3,
            type: 'name'
          }
        ]}
        button={{ prefix: <div></div> }}
      />
      <State />
    </BoomForm>
  )
}

export default App
