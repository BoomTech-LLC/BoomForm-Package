import React from 'react'
import {
  BoomForm,
  Input,
  Textarea,
  Select,
  Checkbox,
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
                required: { msg: 'Req field' }
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
                max: { msg: 'Max Mi Xuina', value: 5,  type: "length"}
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
                phone: { msg: 'Incorrrrrect email' }
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
            <Textarea
              id='6'
              validation={{
                HTMLValidate: true,
                custom: (value) => {
                  if(value === "Hrach")
                    return null;
                  
                  return "Hrach ara"
                }
              }}
              placeholder='Required field'
            />
          </div>

        {/* <div>
          <Checkbox
            id='5'
            name='x'
            value='Yes'
            validation={{
              HTMLValidate: true,
              required: { msg: 'Checkbox Field Is Required' }
            }}
          />
          <Checkbox id='6' name='x' value='No' />
        </div> */}
        <button>Submit</button>
      </form>

      {/* <Select
        id='1'
        initial='1'
        options={[
          { key: 'placeholder', value: '' },
          { key: '1', value: 'Today' },
          { key: '2', value: 'Tomorrow' },
          { key: '3', value: 'Next Week' }
        ]}
        validation={{ required: { msg: 'Requiredd' } }}
      /> */}
      {/* <File id="42" validation={{ required: { mdg: "Required fieldd" } }} /> */}
      {/* <Checkbox
        id='1'
        name='1'
        validation={{ required: { msg: 'Barev' } }}
        value='barev 1'
      />
      <Checkbox id='2' name='1' value='barev 2' />
      <Checkbox id='3' name='1' value='barev 3' /> */}
      {/* <Radio id="1" name="a" value="a" /> */}
      {/* <Radio id="2" name="a" value="S" validation={{ required: { mdg: "Required fieldd" } }} /> */}
      {/* <Radio id="3" name="a" value="d" /> */}
      <State />
    </BoomForm>
  )
}

export default App
