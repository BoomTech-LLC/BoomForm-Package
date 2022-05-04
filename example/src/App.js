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

const initials = {
  a: 'Barev',
  b: { key: 'placeholder', value: ' -- Choice One -- ' },
  c: 'Textarea shit',
  d: true,
  r: 'dsknfsd'
  // e: 'barev2'
}

const App = () => {
  const [x, setX] = useState(false)

  return (
    <>
      <BoomForm x={x}>
        {({ handleChange }) => {
          return (
            <>
              <form>
                <Input id='a' />
                <Select
                  id='b'
                  options={[
                    { key: '1', value: 'Today' },
                    { key: 'placeholder', value: ' -- Choice One -- ' },
                    { key: '2', value: 'Tomorrow' },
                    { key: '3', value: 'Next Week' }
                  ]}
                />
                <Textarea id='c' />
                <Checkbox id='d' />
                <Radio id='e' value='barev1' />
                <Radio id='e' value='barev2' />
                <Custom id='r'>
                  {({ value }) => {
                    console.log(value)
                    return <>{value}</>
                  }}
                </Custom>
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
