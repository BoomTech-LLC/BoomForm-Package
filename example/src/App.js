import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Barev',
          pagination: false,
          logic: true
        }}
        fields={[
          {
            id: 1,
            type: 'select',
            options: [
              { key: 1, value: 'yes', label: 'yes' },
              { key: 2, value: 'no', label: 'no' }
            ]
          },
          {
            id: 2,
            type: 'name'
          },
          {
            id: 3,
            type: 'name',
            label: 3
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
        logic={[
          {
            id: '2',
            action: 'show',
            operator: 'or',
            conditions: [
              {
                id: '1',
                value: 'no',
                rule: 'is',
                item: ''
              },
              {
                id: '3',
                value: 'no',
                rule: 'is',
                item: 'first'
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
