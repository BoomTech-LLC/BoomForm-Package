import React from 'react'
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
  return (
    <BoomForm>
      <form>
        <div>
          <Checkbox
            id='1.2'
            value='Yes'
            validation={{
              HTMLValidate: true,
              required: { msg: 'Checkbox Field Is Required' }
            }}
          />
          <Checkbox id='1.1' value='Yes' />
        </div>
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
