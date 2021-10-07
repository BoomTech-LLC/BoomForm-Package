import React from 'react'
import { BoomForm, Custom, Input, Select, Viewer, Radio } from 'boomform'
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
      <Select
        id='3'
        options={[
          { key: 'placeholder', value: ' -- Choice One -- ' },
          { key: '1', value: 'today', label: 'Today' },
          { key: '2', value: 'tomorrow' },
          { key: '3', value: 'next week' }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
