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
            <Input
              id='1'
              type='text'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Req field' },
                min: {msg: "Shat Grio Ara", value: 5, type: "length"},
                custom: (value) => {
                  if(value === "Arman")
                    return null;
                  else
                    return "Armanna Ara"
                }
              }}
              placeholder='Required field'
            />
          </div>
          <div>
            <Input
              id='2'
              type='text'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Req field' },
                phone: { msg: 'Incorrrrrect phone' },
              }}
              placeholder='Required field'
            />
          </div>
          <div>
            <Input
              id='3'
              type='text'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Req field' },
                email: { msg: 'Incorrrrrect email' }
              }}
              placeholder='Required field'
            />
          </div>
          <div>
          <Select
            id='10'
            options={[
              { key: 'placeholder', value: ' -- Choice One -- ' },
              { key: '1', value: 'Today' },
              { key: '2', value: 'Tomorrow' },
              { key: '3', value: 'Next Week' }
            ]}
            validation={{
              HTMLValidate: true,
              required: { msg: 'Select Is Required' }
            }}
          />
        </div>
          <div>
            <Input
              id='4'
              type='text'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Req field' },
                phone: { msg: 'Incorrrrrect email' }
              }}
              placeholder='Required field'
            />
          </div>
          <div>
            <Textarea
              id='5'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Req field' },
                email: { msg: 'Inorrrrect email' }
              }}
              placeholder='Required field'
            />
          </div>
          <div>
            <File
              id='file1'
              validation={{
                HTMLValidate: true,
                required: { msg: 'File Upload is required' }
              }}
            />
          </div>
          <div>
            <Radio
              id='12.yes'
              name='yes_or_no2'
              value='Yes'
              validation={{
                HTMLValidate: true,
                required: { msg: 'Radio Field Is Required' }
              }}
            />
            <Radio id='13.no' name='yes_or_no2' value='No' />
            <Radio id='14.no' name='yes_or_no2' value='No' />
            <Radio id='15.no' name='yes_or_no2' value='No' />
            <Radio id='16.no' name='yes_or_no2' value='No' />
          </div>  
        <button>Submit</button>
      </form>
      <State />
    </BoomForm>
  )
}

export default App
