import React from 'react'
import SubmitButton from './../../../Fields/SubmitButton/SubmitButton'

const Numbers = ({ currentPage, button, pages, onSubmit, setCurrentPage }) => {
  const handleSetPage = (index) => {
    setCurrentPage(index)
  }

  console.log(currentPage, pages.length)
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
      {currentPage === pages.length - 1 ? (
        <SubmitButton onSubmit={onSubmit} button={button} />
      ) : null}
    </div>
  )
}

export default Numbers
