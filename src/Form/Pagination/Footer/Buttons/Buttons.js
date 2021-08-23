import React from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'

const Buttons = ({
  nextText,
  prevText,
  currentPage,
  button,
  pages,
  onSubmit,
  setCurrentPage,
  isLogicOn,
  logic,
  setLogicIds
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
      <SubmitButton
        button={button}
        isLogicOn={isLogicOn}
        logic={logic}
        setLogicIds={setLogicIds}
        onSubmit={onSubmit}
        hide={currentPage !== pages.length - 1}
      />

      {currentPage !== pages.length - 1 ? (
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
