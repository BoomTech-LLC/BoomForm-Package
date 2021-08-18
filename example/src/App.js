import React from 'react'
import { BoomForm, Form, Custom } from 'boomform'
import State from './State'

const CustomComponent = ({ id, ...props }) => {
  return (
    <div>
      <Custom id={`${id}-f`} initial='barev'>
        {({ handleChange, handleBlur, handleClick, value }) => (
          <input
            value={value || ''}
            onChange={(e) => {
              handleChange({
                id: `${id}-f`,
                value: e.target.value,
                e,
                field: {
                  id: `${id}-f`,
                  initial: null,
                  type: 'custom',
                  ...props
                }
              })
            }}
          />
        )}
      </Custom>
      <Custom id={`${id}-l`}>
        {({ handleChange, handleBlur, handleClick, value }) => (
          <input
            value={value || ''}
            onChange={(e) => {
              handleChange({
                id: `${id}-l`,
                value: e.target.value,
                e,
                field: {
                  id: `${id}-l`,
                  initial: null,
                  type: 'custom',
                  ...props
                }
              })
            }}
          />
        )}
      </Custom>
    </div>
  )
}

const App = () => {
  return (
    <BoomForm>
      <Form
        global={{
          name: 'Form Name',
          description: 'Form Description',
          button: 'Submit Button',
          onSubmit: ({ state, actions }) => {
            const { handleReset } = actions
            handleReset()
          }
        }}
        fields={[
          {
            id: '7',
            type: 'name',
            validations: { first: { required: { msg: 'hello' } } }
          },
          {
            id: '4.5',
            type: 'custom',
            component: ({ ...props }) => <CustomComponent {...props} />
          },
          {
            id: 'aa.5',
            type: 'select',
            options: [
              {
                key: 1,
                value: 'Yes',
                label: 'Yes'
              },
              {
                key: 2,
                value: 'No',
                label: 'No',
                checked: true
              }
            ]
          },
          {
            id: 2,
            type: 'file'
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
