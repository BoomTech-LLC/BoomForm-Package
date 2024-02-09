const validationFunctions = {
  required: (value) => {
    if (typeof value === 'string' && !value.trim()) return false
    else return !!value
  },
  max: {
    length: (value, parameter) => value.length <= parameter,
    word: (value, parameter) => value.trim().split(' ').length <= parameter,
    number: (value, parameter) =>
      parseInt(value) <= parseInt(parameter) ||
      (isNaN(parseInt(value)) && !!value)
  },
  min: {
    length: (value, parameter) => value.length >= parameter,
    word: (value, parameter) => value.trim().split(' ').length >= parameter,
    number: (value, parameter) =>
      parseInt(value) >= parseInt(parameter) ||
      (isNaN(parseInt(value)) && !!value)
  },
  email: (value) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
      value
    ),
  phone: (value) => /^[0-9- ^*()+]{6,}$/i.test(value),
  url: (value) =>
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.([a-zA-Z]{2,5}[\.]{0,1}(.*))$/i.test(
      value
    ),
  regEx: (value, parameter, unicode) => {
    return unicode
      ? new RegExp(parameter, unicode).test(value)
      : new RegExp(parameter).test(value)
  }
}

export const validate = ({ value, validation, type }) => {
  console.log('🚀 ~ validate ~ value:', value)
  if (!validation) return false

  if (value === null) value = ''

  for (let item in validation) {
    switch (item) {
      case 'HTMLValidate':
        break
      case 'regEx': {
        const validator = validationFunctions[item]
        const validationValue = validation[item]
        let message

        validationValue.some((item) => {
          const { value: regex, msg, unicode } = item
          const isValid = validator(value, regex, unicode)
          if (!isValid) {
            message = msg
          }
          return !isValid
        })

        return message
      }
      case 'custom': {
        if (typeof validation[item] === 'function')
          return validation[item](value)
        else throw new Error(`Custom validation must be a function`)

        break
      }
      default: {
        const validator = validationFunctions[item]

        if (validator) {
          const { type, msg, value: parameter } = validation[item]
          if (!type) {
            if (!validator(value, parameter)) return msg
          } else if (validator[type] && !validator[type](value, parameter)) {
            return msg
          }
        } else {
          throw new Error(`Validation type ${item} not found`)
        }
        break
      }
    }
  }
}

export const handleValidateSelect = ({ value, validation }) => {
  if (!validation) return false
  for (let item in validation) {
    const { msg } = validation[item]
    if (item === 'required' && value && value.key === 'placeholder') return msg
  }
}
export const handleValidateRadio = ({ value, validation }) => {
  if (!validation) return false
  for (let item in validation) {
    const { msg } = validation[item]
    if (item === 'required' && !value) return msg
  }
}
