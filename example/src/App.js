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
      {(actions) => {
        return (
          <>
            <form>
              <div>
                {x ? (
                  <>
                    a<Input id='1.1' actions={actions} />
                  </>
                ) : (
                  <>
                    b<Input id='1.2' actions={actions} />
                  </>
                )}
              </div>
              <button>Submit</button>
            </form>
            <State setX={setX} />
          </>
        )
      }}
    </BoomForm>
  )
}

export default App
