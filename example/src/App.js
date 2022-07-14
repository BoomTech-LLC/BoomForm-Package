import React from 'react'
import { BoomForm, Input } from 'boomform'

const App = () => {
  return (
    <BoomForm>
      {({ updateId }) => (
        <>
          <Input
            id='qwe'
            placeholder='dsfslkdn'
            onBlur={(data) => {
              console.log('data', data)
            }}
          />
        </>
      )}
    </BoomForm>
  )
}

export default App
