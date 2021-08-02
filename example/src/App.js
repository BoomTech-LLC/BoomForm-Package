import React from 'react'
import {
  BoomForm,
  Input,
  Select,
  Textarea,
  Radio,
  File,
  Checkbox
} from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      Simple Input:
      <Input
        id='1'
        type='text'
        initial='test'
        validation={{ required: { msg: 'test' } }}
      />
      <Textarea id='2' />
      <Select
        id='3'
        validation={{ required: { msg: 'test' } }}
        options={[
          {
            key: 'placeholder',
            value: 'test'
          },
          {
            key: 1,
            value: 'test 1'
          },
          {
            key: 2,
            value: 'test 2'
          }
        ]}
      />
      <File id='4' />
      <Radio
        id='10'
        value='5'
        name='5'
        validation={{ required: { msg: 'test radio' } }}
      />
      <Radio id='11' value='6' name='5' />
      <Checkbox
        id='6.1'
        value='test 1'
        name='test 3'
        validation={{ required: { msg: 'test' } }}
      />
      <Checkbox id='6.2' value='test 1' name='test 3' />
      <State />
    </BoomForm>
  )
}

export default App
