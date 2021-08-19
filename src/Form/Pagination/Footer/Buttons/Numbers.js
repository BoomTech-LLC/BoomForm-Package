import React from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'

const Numbers = ({
  currentPage,
  button,
  pages,
  onSubmit,
  setCurrentPage,
  isLogicOn,
  logic,
  setLogicIds
}) => {
  const handleSetPage = (index) => {
    setCurrentPage(index)
  }

  return (
    <div className='boomForm-paginationNumbers__content'>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            type='button'
            className='boomForm-paginationNumber__button'
            onClick={() => handleSetPage(index)}
          >
            {index + 1}
          </button>
        )
      })}
      <SubmitButton
        onSubmit={onSubmit}
        button={button}
        hide={currentPage === pages.length - 1}
        isLogicOn={isLogicOn}
        logic={logic}
        setLogicIds={setLogicIds}
      />
    </div>
  )
}

export default Numbers
