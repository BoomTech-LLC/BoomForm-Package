import React from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'

const Buttons = ({
  nextText,
  prevText,
  currentPage,
  button,
  pagesLength,
  onSubmit,
  setCurrentPage
}) => {
  const handleNext = () => setCurrentPage((prev) => prev + 1)
  const handlePrev = () => setCurrentPage((prev) => prev - 1)

  return (
    <div className='boomForm-paginationButtons__content'>
      {currentPage !== 0 ? (
        <button
          type='button'
          className='boomForm-paginationButton'
          onClick={handlePrev}
        >
          {prevText}
        </button>
      ) : null}
      <SubmitButton onSubmit={onSubmit} button={button} />
      {currentPage !== pagesLength - 1 ? (
        <button
          type='button'
          className='boomForm-paginationButton'
          onClick={handleNext}
        >
          {nextText}
        </button>
      ) : null}
    </div>
  )
}

export default Buttons
