import React from 'react'
import { BoomForm, Form, Input } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Form Name',
          description: 'Form Description',
          button: 'Submit Button',
          onSubmit: ({ state, actions }) => {
            const { handleReset } = actions
            handleReset()
          }
        }}
        fields={[
          {
            id: '7',
            type: 'name',
            validations: { first: { required: { msg: 'hello' } } }
          },
          {
            id: 'aa.5',
            type: 'select',
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
            type: 'file'
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
