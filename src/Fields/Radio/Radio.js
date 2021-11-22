import React, { useEffect, useContext, useRef } from 'react'
import context from './../../Store/Context'
import { getFieldValue } from '../../Helpers/global'
import Memoizeable from '../../Memoizeable'
import { useNativeValidationMessage } from '../../Hooks/useNativeValidationMessage'

const Radio = ({ id, initial, name, value: radioValue, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleValidationChange , handleValidationBlur } = useNativeValidationMessage()
  const ref = useRef()
  const { handleChange, handleBlur, declareField } = actions
  const { values, errors, fields } = state

  useEffect(() => {
    const actualInitial = {
      checked: initial === undefined ? false : initial,
      value: radioValue
    }
    declareField({
      id,
      initial: actualInitial,
      field: { name, type: 'radio', value: radioValue,  ...props }
    })
  }, [id, initial])

  const [radioValidation] = fields
    .filter((field) => field.name === name)
    .filter((box) => box?.validation)

  const HTMLValidate = radioValidation?.validation?.HTMLValidate

  useEffect(() => {
    if(HTMLValidate === true)
    {
      if(ref.current && errors[name] !== undefined)
        ref.current.setCustomValidity(errors[name])
      else if(ref.current)
        ref.current.setCustomValidity('')
    }
  }, [ref.current, errors, fields])

  const value = getFieldValue(values, id)

  const onChange = (e) => {
    if (HTMLValidate === true)
      handleValidationChange({ e, possibleError: errors[name] });
    
    handleChange({ id, value: {
      checked: true,
      value: radioValue
    }})
  }

  const onBlur = (e) => {
    if (HTMLValidate === true) 
      handleValidationBlur({ e, possibleError: errors[name] });

    handleBlur({ id })
  }

  if (value === undefined) return null

  return (
    <Memoizeable field={{ id, initial, name, value: value.checked, ...props }}>
      <input
        {...props}
        ref={ref}
        type='radio'
        name={name}
        checked={value.checked}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Memoizeable>
  )
}

export default Radio
