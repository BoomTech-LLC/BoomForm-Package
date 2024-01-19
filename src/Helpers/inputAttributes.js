function filterInputProps(props) {
  const validAttributes = [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'autoFocus',
    'checked',
    'disabled',
    'form',
    'max',
    'maxLength',
    'min',
    'minLength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'size',
    'step',
    'type',
    'value'
  ]

  const validProps = {}

  for (const prop in props) {
    if (validAttributes.includes(prop)) {
      validProps[prop] = props[prop]
    }
  }

  return validProps
}

export default filterInputProps
