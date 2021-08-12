import React, { useMemo } from 'react'

const Memoizeable = ({ children, field }) => {
  return useMemo(() => {
    return children
  }, [field])
}

export default Memoizeable
