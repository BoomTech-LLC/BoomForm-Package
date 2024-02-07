import { useCallback, useEffect, useRef, useState } from 'react'
import Emitter from './../Events'
import {
  getFieldValue,
  setNestedValue,
  getUseFieldInitial
} from './../Helpers/global'

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
    setData(getUseFieldInitial(ids))
    current_event.current = Emitter.addFieldListener(ids, (payload) => {
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
