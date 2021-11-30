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
          <Radio
            id='1'
            value='Yes'
            validation={{ HTMLValidate: true, required: { msg: 'Something' } }}
          />
          <Radio id='1' value='No' />
          <Radio id='1' value='Karen' />
        </div>
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
