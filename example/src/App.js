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
      <form>
        <div>
          {x ? (
            <>
              a<Input id='1.1' />
            </>
          ) : (
            <>
              b<Input id='1.2' />
            </>
          )}
        </div>
        <button>Submit</button>
      </form>
      <State setX={setX} />
    </BoomForm>
  )
}

export default App
