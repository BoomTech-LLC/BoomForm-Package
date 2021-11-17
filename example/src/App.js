import React from 'react'
import { BoomForm, Input, Textarea, Select, Checkbox } from 'boomform'
import State from './State'

const App = () => {
  return (
    <BoomForm>
      {/* <Input
        id='11'
        type='text'
        validation={{
          required: { msg: 'Req field' },
          email: { msg: 'Incorrrrrect email' }
        }}
        placeholder='Required field'
      />
      <Textarea
        id='23'
        validation={{
          required: { msg: 'Req field' },
          email: { msg: 'Inorrrrect email' }
        }}
        placeholder='Required field'
      />
      <Select
        id='1'
        initial='1'
        options={[
          { key: 'placeholder', value: ' -- Choice One -- ' },
          { key: '1', value: 'Today' },
          { key: '2', value: 'Tomorrow' },
          { key: '3', value: 'Next Week' }
        ]}
        validation={{ required: { msg: 'Requiredd' } }}
      /> */}
      <Checkbox
        id='1'
        name='1'
        validation={{ required: { msg: 'Barev' } }}
        value='barev 1'
      />
      <Checkbox id='2' name='1' value='barev 2' />
      <Checkbox id='3' name='1' value='barev 3' />
      <State />
    </BoomForm>
  )
}

export default App
