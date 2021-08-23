import React, { useState, useEffect } from 'react'
import Header from './Header'
import StandardFooter from './Footer'
import PaginationFooter from './Pagination/Footer/Footer'
import Fields from './Fields'

const Form = ({ global, fields, pagination = {}, logic }) => {
  const {
    name,
    description,
    button,
    onSubmit,
    pagination: isPaginationOn = false,
    logic: isLogicOn = false
  } = global

  const {
    pages,
    current = 0,
    nextText = 'Next',
    prevText = 'Previous',
    navigation = 'buttons'
  } = pagination

  const [paginationIds, setPaginationIds] = useState(
    isPaginationOn ? pages[current] : []
  )
  const [currentPage, setCurrentPage] = useState(
    isPaginationOn ? current : null
  )
  const [logicIds, setLogicIds] = useState([])

  useEffect(() => {
    if (isPaginationOn) setPaginationIds(pages[currentPage])
  }, [currentPage])

  return (
    <form className='boomForm' noValidate>
      <Header
        name={name}
        description={description}
        pagesLength={pages?.length}
        currentPage={currentPage}
        isPaginationOn={isPaginationOn}
      />
      <Fields
        fields={fields}
        paginationIds={paginationIds}
        logicIds={logicIds}
      />
      {isPaginationOn ? (
        <PaginationFooter
          currentPage={currentPage}
          button={button}
          navigation={navigation}
          nextText={nextText}
          prevText={prevText}
          pagesLength={pages.length}
          isLogicOn={isLogicOn}
          logic={logic}
          onSubmit={onSubmit}
          setCurrentPage={setCurrentPage}
          setLogicIds={setLogicIds}
          pages={pages}
        />
      ) : (
        <StandardFooter
          onSubmit={onSubmit}
          button={button}
          isLogicOn={isLogicOn}
          logic={logic}
          setLogicIds={setLogicIds}
        />
      )}
    </form>
  )
}

export default Form
