import React from 'react'
import { BoomForm, Custom, Input, Viewer } from 'boomform'
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
      <Input type='text' id='3' />
      <Custom id='1'>
        {({ handleChange, values, id, value }) => {
          return (
            <div className='button-group'>
              <button
                onClick={(e) => handleButtonClick(handleChange, e, id, 0)}
              >
                Button 1 {value === 0 && 'active'}
              </button>
              <button
                onClick={(e) => handleButtonClick(handleChange, e, id, 1)}
              >
                Button 2 {value === 1 && 'active'}
              </button>
              <button
                onClick={(e) => handleButtonClick(handleChange, e, id, 2)}
              >
                Button 3 {value === 2 && 'active'}
              </button>
            </div>
          )
        }}
      </Custom>

      <Viewer>
        {({ values }) => {
          console.log(values)
          return null
        }}
      </Viewer>
      <State />
    </BoomForm>
  )
}

export default App
