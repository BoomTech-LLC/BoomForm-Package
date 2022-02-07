import React, { useEffect, useState } from 'react'
import {
  BoomForm,
  Input,
  Textarea,
  Select,
  Checkbox,
  File,
  Radio,
  useField
} from 'boomform'
import State from './State'

const App = () => {
  const [x, setX] = useState(true)
  const data = useField(['2', '3'])

  return (
    <>
      <BoomForm x={x}>
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
                    setX((prev) => !prev)
                  }}
                >
                  La la la
                </div>
                {x ? <State /> : null}
              </form>
            </>
          )
        }}
      </BoomForm>
    </>
  )
}

export default App
