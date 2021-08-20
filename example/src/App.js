import React from 'react'
import { BoomForm, Form } from 'boomform'
import State from './State'

const App = () => {
  return (
      <Form
        global={{
          name: 'Barev',
          pagination: false,
          logic: false
        }}
        fields={[
          {
            id: 1,
            type: 'starRating'
          },
          {
            id: 2,
            type: 'scaleRating'
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
            [1, 2],
            [3, 4],
            [5, 6]
          ]
        }}
        logic={[
          {
            id: 2,
            action: 'show',
            operator: 'or',
            conditions: [
              {
                id: 1,
                value: 'no',
                rule: 'is',
                item: ''
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
// {
//   id: 'aa.5',
//   type: 'select',
//   options: [
//     {
//       key: 1,
//       value: 'Yes',
//       label: 'Yes'
//     },
//     {
//       key: 2,
//       value: 'No',
//       label: 'No',
//       checked: true
//     }
//   ]
// },
// {
//   id: 2,
//   type: 'file'
// }
