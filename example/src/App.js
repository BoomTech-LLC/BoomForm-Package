import React from 'react'
import { BoomForm, Input } from 'boomform'

const App = () => {
  return (
    <BoomForm>
      {({ updateId }) => (
        <>
          <Input
            id='qwe'
            placeholder='dsfslkdn'
            onBlur={(data) => {
              console.log('data', data)
              
            }}
          />
          <Input id='password' type='password'
          placeholder='pasword'
            validation={{
              HTMLValidate: true,
              required:{msg:"password is required"}
          }}
          />
          <Input id='repeatPassword' type='password' placeholder='repeat password'
            validation={{
              HTMLValidate: true,
              custom: (value,values) => {
                console.log(value, values)
                if (!(values?.password === values?.repeatPassword)) {
                  return "Wrong repeat password"
                }

                return false
              }
           }}
          />
        </>
      )}
    </BoomForm>
  )
}

export default App
