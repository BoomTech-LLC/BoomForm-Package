import React from 'react'
import { BoomForm, Input, useField } from 'boomform'

const Hajox = () => {
  const fieldsData = useField(['2', '3', '4', '5', '6', '7'])

  console.log('====================================')
  console.log('USEFIELD RETURN ', fieldsData)
  console.log('====================================')
  return (
    <>
      <Input id='2' initial='Barev2' placeholder='Barev2' />
      <Input id='3' placeholder='Barev3' />
      <Input id='4' placeholder='Barev4' />
      <Input id='5' placeholder='Barev5' />
      <Input id='6' placeholder='Barev6' />
      <Input id='7' placeholder='Barev7' />
    </>
  )
}

const App = () => {
  return (
    <BoomForm>
      {() => (
        <>
          <Hajox />
        </>
      )}
    </BoomForm>
  )
}

export default App
