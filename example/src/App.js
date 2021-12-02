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
            value='Yes'
            validation={{ HTMLValidate: true, required: { msg: 'Something' } }}
          />
          <Radio id={1} value='No' />
          <Radio id={1} value='Karen' />
          <Select
            id={2}
            validation={{ HTMLValidate: true, required: { msg: 'Some shit' } }}
            options={[
              { key: 'placeholder', value: ' -- Choice One -- ' },
              { key: '1', value: 'Today' },
              { key: '2', value: 'Tomorrow' },
              { key: '3', value: 'Next Week' }
            ]}
          />
        </div>
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
