import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Form Name',
          description: 'Form Description',
          button: 'Submit Button'
        }}
        fields={[
          {
            id: 1,
            type: 'name'
          },
          {
            id: 2,
            type: 'address'
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
