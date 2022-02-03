import React, { useState } from 'react'
import {
  BoomForm,
  Input,
  Textarea,
  Select,
  Checkbox,
  File,
  Radio
} from 'boomform'
import State from './State'

const App = () => {
  const [x, setX] = useState(true)

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
              <div
                onClick={() => {
                  handleChange({ id: '1', value: Math.random() })
                }}
              >
                Vazgen
              </div>
            </form>
            <State setX={setX} />
          </>
        )
      }}
    </BoomForm>
  )
}

export default App
