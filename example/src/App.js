import React, { useContext } from 'react'
import { BoomForm, Input, Context } from 'boomform'

const State = () => {
  const x = useContext(Context)

  console.log(x.state)

  return null
}

const dynamicInitaials = {
  'field.123.barev': null,
  'addhsfjsdf.dsfnasd.adfasdf': 'dadsd'
}

const App = () => {
  return (
    <BoomForm initials={{ 1.1: 'askjfnss' }}>
      {({ declareFields }) => (
        <>
          Simple Input:
          <Input
            id={'1.1'}
            validation={{
              HTMLValidate: true,
              required: { msg: 'This Field is required' }
            }}
          />
          <Input
            id={'1.2'}
            validation={{
              HTMLValidate: true,
              required: { msg: 'This Field is required' }
            }}
          />
          <button onClick={() => declareFields(dynamicInitaials)}>
            sdkfnsd
          </button>
          <State />
        </>
      )}
    </BoomForm>
  )
}

export default App
