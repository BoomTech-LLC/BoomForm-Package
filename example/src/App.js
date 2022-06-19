import React, { useContext, useState } from 'react'
import { BoomForm, Input, Context } from 'boomform'

const State = () => {
  const x = useContext(Context)

  console.log('Data', x.state)

  return null
}

const App = () => {
  const [id, setId] = useState('x.z')

  return (
    <BoomForm ids={id}>
      {({ updateId }) => (
        <>
          Simple Input:
          <Input
            id={`${id}.b`}
            validation={{
              required: { msg: 'This Field is required' }
            }}
          />
          <Input
            id={`${id}.a`}
            validation={{
              required: { msg: 'This Field is required' }
            }}
          />
          <div
            onClick={() => {
              updateId({ oldId: 'x.z', newId: 'as.otherShit' })
              setId('as.otherShit')
            }}
          >
            Update
          </div>
          <State />
        </>
      )}
    </BoomForm>
  )
}

export default App
