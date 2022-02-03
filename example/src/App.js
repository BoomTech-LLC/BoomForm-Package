import React, { useEffect, useState } from 'react'
import {
  BoomForm,
  Input,
  Textarea,
  Select,
  Checkbox,
  File,
  Radio,
  Emitter
} from 'boomform'
import State from './State'

const App = () => {
  const [x, setX] = useState(true)

  useEffect(() => {
    Emitter.fieldListener(["2"], (payload) => console.log("ff", payload))
  }, [])

  return (
    <BoomForm>
      {({ handleChange }) => {
        return (
          <>
            <form>
              <div>
                <Input id='1' />
                <Input id='2' />
                <Input id='3' />
              </div>
              <button>Submit</button>

            </form>
            {/* <State setX={setX} /> */}
          </>
        )
      }}
    </BoomForm>
  )
}

export default App
