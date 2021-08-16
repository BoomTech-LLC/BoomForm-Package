import React, { useContext } from 'react'
import { BoomForm, Form, Context, Custom } from 'boomform'
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
          button: 'Submit Button'
        }}
        fields={[
          {
            id: '4.5',
            type: 'custom',
            component: ({ ...props }) => <CustomComponent {...props} />
          },
          {
            id: 1,
            type: 'singleChoice',
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
            type: 'price'
          }
        ]}
      />
      <State />
    </BoomForm>
  )
}

export default App
