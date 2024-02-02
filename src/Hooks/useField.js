import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Emitter from './../Events'
// import {
//   getFieldValue,
//   setNestedValue,
//   getUseFieldInitial
// } from './../Helpers/global'

const isObject = (variable) => {
  return (
    typeof variable === 'object' &&
    !Array.isArray(variable) &&
    variable !== null
  )
}
const getFieldValue = (values, id) => {
  if (!id) throw 'field should have a id attribute'
  if (!id.toString().includes('.')) return values[id]
  let idPath = id.split('.')
  idPath = idPath.filter((path) => path)
  return [values].concat(idPath).reduce((acc, val) => {
    if (!acc) return undefined
    return acc[val]
  })
}
const setNestedValue = (key, value, values) => {
  const keyPath = key.toString().split('.')
  keyPath.reduce((acc, val, index) => {
    if (keyPath.length - 1 === index) {
      return (acc[val] = value)
    }
    if (!isObject(acc[val]) || acc[val] === null) return (acc[val] = {})
    else return acc[val]
  }, values)

  // console.log('Setting nested value', values)
  return values
}

const getUseFieldInitial = (ids) => {
  const structuredData = {
    id: null,
    value: null,
    touched: null,
    ids,
    neededValues: {},
    prevState: {},
    newErrors: [],
    newTouched: []
  }

  if (window.__current_form_state) {
    const { values, touched, errors } = window.__current_form_state
    let neededValues = {}

    for (let i = 0; i < ids.length; i++)
      neededValues = setNestedValue(
        ids[i],
        getFieldValue(values, ids[i]),
        neededValues
      )

    structuredData.neededValues = neededValues
    structuredData.prevState = window.__current_form_state
    structuredData.newErrors = errors
    structuredData.newTouched = touched
  }
  // console.log('Returning', structuredData)
  return structuredData
}

const useField = (ids) => {
  const [data, setData] = useState({
    id: null,
    value: null,
    touched: null,
    ids,
    neededValues: {},
    prevState: {},
    newErrors: {},
    newValues: {},
    newTouched: {}
  })
  const initialValues = useMemo(() => {
    return getUseFieldInitial(ids)
  }, [
    JSON.stringify(ids),
    JSON.stringify(Object.keys(window.__current_form_state || []))
  ])
  const current_event = useRef(null)

  const handleDataSet = useCallback(
    (payload) => {
      const { state, errors, values, touched, id } = payload
      const neededValues = ids.reduce((acc, id) => {
        return setNestedValue(id, getFieldValue(values, id), acc)
      }, {})
      const structuredData = {
        id,
        value: getFieldValue(values, id),
        touched: touched[id],
        ids,
        neededValues,
        prevState: state,
        newErrors: errors,
        newValues: values,
        newTouched: touched
      }
      setData(structuredData)
    },
    [ids]
  )

  useEffect(() => {
    setData(initialValues)
    current_event.current = Emitter.addFieldListener(ids, (payload) => {
      console.log('asdasdsa', payload)
      setTimeout(() => handleDataSet(payload))
    })
    return () => {
      if (current_event.current)
        Emitter.removeFieldListener(current_event.current)
    }
  }, [JSON.stringify(ids)])

  return data
}

export default useField
