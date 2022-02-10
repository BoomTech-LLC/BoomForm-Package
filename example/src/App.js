import React, { useEffect, useState } from 'react'
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
  const [x, setX] = useState(true)

  return (
    <>
      <BoomForm x={x}>
        {({ handleChange }) => {
          return (
            <>
              <form>
                <div>
                  <Input id='1.1' />
                  <Input id='1.2' />
                  <Input id={3} />
                  <Custom id='4'>
                    {({ value, getAndChange }) => {
                      console.log(value)
                      return (
                        <div
                          onClick={() => {
                            getAndChange((state) => {
                              return {
                                id: '4',
                                value: [123, 465, 456]
                              }
                            })
                          }}
                        >
                          Custom
                        </div>
                      )
                    }}
                  </Custom>
                </div>
                <button>Submit</button>
                <div
                  onClick={() => {
                    // handleChange((prev) => {
                    //   console.log('prev', prev)
                    //   return { id: '1.1', value: 'vazgen' }
                    // })
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
