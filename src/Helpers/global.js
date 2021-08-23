export const setNestedValue = (key, value, values) => {
  const keyPath = key.toString().split('.')
  keyPath.reduce((acc, val, index) => {
    if (keyPath.length - 1 === index) {
      return (acc[val] = value)
    }
    if (typeof acc[val] !== 'object' || acc[val] === null)
      return (acc[val] = {})
    else return acc[val]
  }, values)
  return values
}

export const handleRadioEdit = (values, fields, name, id, value) => {
  for (let i in fields) {
    if (fields[i].type === 'radio' && fields[i].name === name)
      if (fields[i].id.toString().includes('.'))
        values = setNestedValue(
          fields[i].id,
          fields[i].id === id
            ? { checked: true, value: fields[i].value }
            : { checked: false, value: fields[i].value },
          values
        )
      else if (fields[i].id === id) values[fields[i].id].checked = true
      else values[fields[i].id].checked = false
  }

  return { values }
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

export const getNestedValue = (values, index) => {
  return index.split('.').reduce((acc, index) => {
    return acc[index]
  }, values)
}

export const checkIdStructure = (id, fields) => {
  const [sameId] = fields.filter((field) => field.id == id)
  if (sameId) throw new Error('`Field` id is not unique')
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
  if (object && typeof object === 'object') {
    newObject = {}
    for (var i in object) {
      newObject[i] = deepCopy(object[i])
    }
  }
  return newObject
}
  
export const getPrintableFields = (fields, logic = [], pagination = []) => {
  const printableFields = fields.flatMap(({ id }) =>
    !logic.includes(id) ? id : []
  )
  console.log(printableFields)
  return [printableFields, pagination].reduce((a, c) => {
    if (!c.length) return a
    return a.filter((i) => c.includes(i))
  })
}
