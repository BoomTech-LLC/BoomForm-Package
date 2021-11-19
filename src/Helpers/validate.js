export const validate = ({ value, validation, type }) => {
  if (!validation) return false
  if (type === "checkbox") return handleValidateCheckbox({ value, validation })
  if (value === null) value = ''

  for (let item in validation) {
    const { type, msg, value: parameter } = validation[item]
    switch (item) {
      case 'required':
        if (!value) return msg
        break

      case 'max':
        switch (type) {
          case 'length':
            if (
              value !== null &&
              value !== undefined &&
              value !== '' &&
              value.length > parameter
            )
              return msg
            break
          case 'word':
            if (
              value !== null &&
              value !== undefined &&
              value !== '' &&
              value.trim().split(' ').length > parameter
            )
              return msg
            break
          case 'number':
            if (
              parseInt(value) > parseInt(parameter) ||
              (isNaN(parseInt(value)) &&
                value !== null &&
                value !== undefined &&
                value !== '')
            )
              return msg
            break
        }
        break

      case 'min':
        switch (type) {
          case 'length':
            if (
              value !== null &&
              value !== undefined &&
              value !== '' &&
              value.length < parameter
            )
              return msg
            break
          case 'word':
            if (
              value !== null &&
              value !== undefined &&
              value !== '' &&
              value.trim().split(' ').length < parameter
            )
              return msg
            break
          case 'number':
            if (
              parseInt(value) < parseInt(parameter) ||
              (isNaN(parseInt(value)) &&
                value !== null &&
                value !== undefined &&
                value !== '')
            )
              return msg
            break
        }
        break

      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && value)
          return msg
        break

      case 'phone':
        if (!/^[0-9- ^*()+]{6,}$/i.test(value) && value) return msg
        break

      case 'url':
        if (
          !/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.([a-zA-Z]{2,5}[\.]{0,1}(.*))$/i.test(
            value
          ) &&
          value
        )
          return msg
        break
      case 'custom':
        return validation[item](value)
    }
  }
}

const handleValidateCheckbox = ({ value: { checked }, validation }) => {
  for (let [key, { msg }] of Object.entries(validation)) {
    if (key === "required" && checked === false) return msg
  }

  return false
}
export const handleValidateSelect = ({ value, validation }) => {
  if (!validation) return false
  for (let item in validation) {
    const { msg } = validation[item]
    if (item === 'required' && value.key === 'placeholder') return msg
  }
}
export const handleValidateRadio = ({ value, validation }) => {
  if (!validation) return false
  for (let item in validation) {
    const { msg } = validation[item]
    if (item === 'required' && !value) return msg
  }
}
