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
            type: 'select',
            validation: { required: { msg: 'Sxala' } },
            options: [
              {
                key: 'placeholder',
                value: 'barev',
                label: 'barev'
              },
              {
                key: 2,
                value: 'barev1',
                label: 'barev1'
              },
              {
                key: 3,
                value: 'barev2',
                label: 'barev2'
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
