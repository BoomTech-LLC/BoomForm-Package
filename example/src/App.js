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
            id='1.yes'
            name='yes_or_no'
            value='Yes'
            validation={{
              HTMLValidate: true,
              required: { msg: 'Checkbox Field Is Required' }
            }}
          />
        </div>
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
