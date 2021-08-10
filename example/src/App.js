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
          },
          {
            id: 3,
            type: 'multipleChoice',
            options: [
              {
                key: 1,
                label: 'Yes',
                value: true,
                checked: true
              },
              {
                key: 2,
                label: 'No',
                value: false
              }
            ]
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
