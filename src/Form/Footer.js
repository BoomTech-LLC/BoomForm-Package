import React from 'react'
import SubmitButton from './Fields/SubmitButton/SubmitButton'

const Footer = ({ onSubmit, button, isLogicOn, logic, setLogicIds }) => {
  return (
    <div>
      <SubmitButton
        button={button}
        isLogicOn={isLogicOn}
        logic={logic}
        setLogicIds={setLogicIds}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Footer
