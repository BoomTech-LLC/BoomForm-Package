import React, { useContext } from 'react'
import { BoomForm, Input, useField } from 'boomform'

const State = () => {
  const x = useField(['x.y'])

  console.log('some shit', x)

  return null
}

const App = () => {
  return (
    <BoomForm>
      {() => (
        <>
          Simple Input:
          <Input
            id={'x.y'}
            validation={{
              required: { msg: 'This Field is required' }
            }}
          />
          <Input
            id={'x.z'}
            validation={{
              required: { msg: 'This Field is required' }
            }}
          />
          <State />
        </>
      )}
    </BoomForm>
  )
}

export default App
