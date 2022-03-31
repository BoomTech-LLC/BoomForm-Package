import React, { useEffect, useState,useMemo } from 'react'
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

  const fieldData = useField(['1.1', '1.2', "3"])

  console.log("FIELD DATA", fieldData)

  return (
    <>
      <BoomForm x={x}>
        {({ handleChange }) => {
          return (
            <>
              <form>
                <div>
                  <Select
                    id='1'
                    initial='1'
                    options={[
                      { key: 'placeholder', value: ' -- Choice One -- ' },
                      { key: '1', value: 'Today' },
                      { key: '2', value: 'Tomorrow' },
                      { key: '3', value: 'Next Week' }
                    ]}
                  />
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
