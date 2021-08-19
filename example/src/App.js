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
            id: '1.2',
            type: 'text',
            initial: 1
          },
          {
            id: '1.1',
            type: 'text',
            initial: 2
          },
          {
            id: 3,
            type: 'text',
            initial: 3
          },
          {
            id: 4,
            type: 'text',
            initial: 4
          },
          {
            id: 5,
            type: 'text',
            initial: 5
          },
          {
            id: 6,
            type: 'text',
            initial: 6
          }
        ]}
        pagination={{
          current: 0,
          navigation: 'numbers',
          pages: [
            ['1.1', '1.2'],
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
