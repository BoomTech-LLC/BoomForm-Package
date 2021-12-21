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
            id={1}
            value='Yes 1'
            checked={true}
            validation={{ HTMLValidate: true, required: { msg: 'Something' } }}
          />
          <Radio id={1} value='Yes 2' />
          <Radio id={1} value='Yes 3' />
        </div>
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
