import React from 'react'
import { BoomForm, Input,Error } from 'boomform'
import { useField } from 'boomform'
import State from './State';

const App = () => {
  const fields = useField(['password','repeatPassword']);
  console.log(fields)
  const handleBuutonClick = (handleChange,e,id,status) => {
    handleChange({
      value: status,
      e,
      id,
      field:{type:"custom",id}
    })
  }

  const equalsFields = ({
    password,repeatPassword
  }) => {
    if (password && repeatPassword) {
      return password === repeatPassword
    }
    return false
  }
  return (
    <BoomForm >
      {({ updateId }) => (
        <>
        
          <Input id='password' type='password' placeholder='password' validation={{
            HTMLValidate: true,
            required:{msg:"Password is required"}
          }} />
            <br />
          <Input id="repeatPassword" type='password' placeholder='repeat Password'
            validation={{
              HTMLValidate:true,
              custom: (value, values) => {
                // console.log(values)
                // console.log(value)
                if (!(values?.password === values?.repeatPassword)) {
                  return "Wrong repeat password"
                }
                
                return false
             }
           }}
          />
         
          <State />
          <Error id="custom"/>
        </>
      )}
    </BoomForm>
  )
}

export default App
