import React, { useEffect, useState, useMemo } from 'react'
import {
  BoomForm,
  Input,
  Textarea,
  Select,
  Checkbox,
  File,
  Radio,
  useField,
  Custom
} from 'boomform'
import State from './State'

const App = () => {
  const [x, setX] = useState(false)

  return (
    <>
      <BoomForm x={x}>
        {({ handleChange }) => {
          return (
            <>
              <form>
                <Input id='1' />
                <Input id='2' />
                {x && <State />}
                <div onClick={() => setX((p) => !p)}>123</div>
              </form>
            </>
          )
        }}
      </BoomForm>
    </>
  )
}

export default App
