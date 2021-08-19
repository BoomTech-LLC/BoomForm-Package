import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Barev',
          pagination: true
        }}
        fields={[
          {
            id: 1,
            type: 'name'
          },
          {
            id: 2,
            type: 'name'
          },
          {
            id: 3,
            type: 'name'
          },
          {
            id: 4,
            type: 'name'
          },
          {
            id: 5,
            type: 'name'
          },
          {
            id: 6,
            type: 'name'
          }
        ]}
        pagination={{
          current: 0,
          pages: [
            [1, 2],
            [3, 4],
            [5, 6]
          ]
        }}
      />
      <State />
    </BoomForm>
  )
}

export default App
