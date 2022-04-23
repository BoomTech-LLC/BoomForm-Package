export const isObject = (variable) => {
  return (
    typeof variable === 'object' &&
    !Array.isArray(variable) &&
    variable !== null
  )
}

export const setNestedValue = (key, value, values) => {
  const keyPath = key.toString().split('.')
  keyPath.reduce((acc, val, index) => {
    if (keyPath.length - 1 === index) {
      return (acc[val] = value)
    }
    if (!isObject(acc[val]) || acc[val] === null) return (acc[val] = {})
    else return acc[val]
  }, values)
  return values
}

export const getFieldValue = (values, id) => {
  if (!id) throw 'field should have a id attribute'
  if (!id.toString().includes('.')) return values[id]
  let idPath = id.split('.')
  idPath = idPath.filter((path) => path)
  return [values].concat(idPath).reduce((acc, val) => {
    if (!acc) return undefined
    return acc[val]
  })
}

export const checkIdStructure = (id, fields) => {
  for (let i = 0; i < fields.length; i++) {
    const { id: prevId } = fields[i]
    const splitedPrevId = prevId.toString().split('.')
    const splitedId = id.toString().split('.')
    if (splitedId.length > splitedPrevId.length) {
      if (
        JSON.stringify(splitedId.splice(0, splitedPrevId.length)) ==
        JSON.stringify(splitedPrevId)
      )
        throw new Error('Invalid `object` structure')
    } else {
      if (
        JSON.stringify(splitedPrevId.splice(0, splitedId.length)) ==
        JSON.stringify(splitedId)
      )
        throw new Error('Invalid `object` structure')
    }
  }
}

export const deepCopy = (object) => {
  let newObject = object
  if (object && isObject(object)) {
    newObject = {}
    for (var i in object) newObject[i] = deepCopy(object[i])
  }
  return newObject
}

export const changeFieldInitial = ({ id, initial, values }) => {
  if (id.toString().includes('.')) values = setNestedValue(id, initial, values)
  else values[id] = initial
  return values
}

export const getUseFieldInitial = (ids) => {
  const { values, touched, errors } = window.__current_form_state
  let neededValues = {}

  for (let i = 0; i < ids.length; i++)
    neededValues = setNestedValue(
      ids[i],
      getFieldValue(values, ids[i]),
      neededValues
    )

  const structuredData = {
    id: null,
    value: null,
    touched: null,
    ids,
    neededValues,
    prevState: window.__current_form_state,
    newErrors: errors,
    newValues: values
  }

  return structuredData
}
