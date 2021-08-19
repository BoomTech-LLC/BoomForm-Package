import React from 'react'
import ProgressBar from './ProgressBar'

const Pagination = ({ isPaginationOn, ...props }) => {
  if (isPaginationOn !== true) return null

  return <ProgressBar {...props} />
}

export default Pagination
