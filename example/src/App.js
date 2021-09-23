import React from 'react'
import { BoomForm, Custom, Input, Viewer, Radio } from 'boomform'
import State from './State'

const App = () => {
  const handleButtonClick = (handleChange, e, id, status) => {
    handleChange({
      value: status,
      id,
      e,
      field: { type: 'custom', id }
    })
  }

  return (
    <BoomForm>
      <Input
        type='date'
        id='3'
        validation={{
          custom: {
            condition: (value) => {
              if (value > '2021-09-18') return 'Invalid Date'
            }
          }
        }}
      />
      <State />
    </BoomForm>
  )
}

export default App
