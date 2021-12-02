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
            id={1}
            payable={1}
            initial=''
            validation={{ HTMLValidate: true, required: { msg: 'Some shit' } }}
            options={[
              { key: 'placeholder', value: 'Please choose...' },
              {
                key: 0,
                value: 'Integrated Digital Campaign',
                label: 'Integrated Digital Campaign (+$130) ',
                price: 130
              },
              {
                key: 1,
                value: 'Social Media Campaigns',
                label: 'Social Media Campaigns (+$100) ',
                price: 100
              },
              {
                key: 2,
                value: 'Websites, Microsites, Web services',
                label: 'Websites, Microsites, Web services (+$100) ',
                price: 100
              },
              { key: 3, value: 'Apps', label: 'Apps (+$100) ', price: 100 },
              { key: 4, value: 'Games', label: 'Games (+$100) ', price: 100 },
              {
                key: 5,
                value: 'Messaging',
                label: 'Messaging (+$100) ',
                price: 100
              },
              {
                key: 6,
                value: 'Novel & Devices',
                label: 'Novel & Devices (+$100) ',
                price: 100
              },
              { key: 'other', value: 'Other' }
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
