import { useEffect, useState } from 'react'
import Emitter from './../Events'
import { getFieldValue } from './../Helpers/global'

const useField = (ids) => {
  const [data, setData] = useState(null)

  const handleDataSet = (payload) => {
    const { state, errors, values, id } = payload
    const neededValues = {}

    for (let i = 0; i < ids.length; i++)
      neededValues[ids[i]] = getFieldValue(values, ids[i])

    const structuredData = {
      id,
      value: getFieldValue(values, id),
      ids,
      neededValues,
      oldState: state,
      newErrors: errors,
      newvalues: values
    }

    setData(structuredData)
  }

  useEffect(() => {
    const event_id = Emitter.addFieldListener(ids, (payload) => {
      setTimeout(() => handleDataSet(payload))
    })

    return () => Emitter.removeFieldListener(event_id)
  }, [])

  return data
}

export default useField
