import React, { useMemo } from 'react'

const Memoizeable = ({ children, value }) => {
  return useMemo(() => {
    return children
  }, [value])
}

export default Memoizeable
