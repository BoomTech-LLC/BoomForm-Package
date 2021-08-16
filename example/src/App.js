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
            type: 'singleChoice',
            options: [
              {
                key: 1,
                value: 'Yes',
                label: 'Yes'
              },
              {
                key: 2,
                value: 'No',
                label: 'No',
                checked: true
              }
            ]
          },
          {
            id: 2,
            type: 'price'
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
