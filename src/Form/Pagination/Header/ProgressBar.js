import React from 'react'

const ProgressBar = ({ pagination }) => {
  const { pages } = pagination
  let { currentPage } = pagination

  return (
    <div className='boomForm-paginationProgressBar__content'>{`Page ${currentPage} of ${pages.length}`}</div>
  )
}

export default ProgressBar
