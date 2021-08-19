import React from 'react'

const ProgressBar = ({ pagesLength, currentPage }) => {
  return (
    <div className='boomForm-paginationProgressBar__content'>{`Page ${
      currentPage + 1
    } of ${pagesLength}`}</div>
  )
}

export default ProgressBar
