import React from 'react'
import { BoomForm, Input, useField } from 'boomform'

const SomeComponent = () => {
  const neededState = useField(['user'])
  console.log(neededState)
  return 'Check your console'
}

const App = () => {
  return (
    <>
      <BoomForm>
        {() => (
          <>
            <form>
              Name: <Input id='user.name' />
              <br />
              Surname: <Input id='user.surname' />
              <br />
              <p>I'm not rendering `SomeComponent`</p>
              <br />
              <Input id='thing' />
            </form>
            <SomeComponent />
          </>
        )}
      </BoomForm>
    </>
  )
}

export default App
