import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const Cust = (props) => {
  return <div>Custom Component Bitxh</div>
}

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
            type: 'textarea',
            validation: {
              required: { msg: 'Barev Aper' },
              min: { msg: 'Vazgen', value: 3, type: 'char' }
            }
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
