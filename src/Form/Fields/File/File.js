import React, { useContext, useEffect } from 'react'
import classNames from 'classnames/bind'
import { FileUpload } from 'boom-file-upload'
import context from '../../../Store/Context'
import { getFieldValue } from '../../../Helpers/global'

const File = ({
  id,
  initial,
  label,
  classnameprefix,
  isMultiple = true,
  inputContent = 'Click Or Drag and Drop For Upload Files',
  autoUpload = true,
  handleRemove = () => {},
  getFiles = () => {},
  getErrors = () => {},
  getResult = () => {},
  url = 'https://httpbin.org/post',
  headers = { 'Content-type': 'application/json' },
  ...props
}) => {
  const { state, actions } = useContext(context)
  const { handleChange, declareField } = actions
  const { values } = state

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'file', ...props }
    })
  }, [id, initial])

  const value = getFieldValue(values, id)

  if (value === undefined) return null

  const handleGetFiles = (result) => {
    handleChange({
      id,
      e: null,
      value: result,
      field: { id, initial }
    })
  }

  return (
    <div
      className={classNames('boomForm-field__content', {
        [`${classnameprefix}-field__content`]: classnameprefix
      })}
    >
      {label !== undefined && (
        <label
          className={classNames('boomForm-field__label', {
            [`${classnameprefix}__label`]: classnameprefix
          })}
        >
          {label}
        </label>
      )}
      <FileUpload
        {...props}
        id={id}
        classprefix={classnameprefix}
        isMultiple={isMultiple}
        inputContent={inputContent}
        autoUpload={autoUpload}
        getResult={getResult}
        onRemove={handleRemove}
        getFiles={handleGetFiles}
        getErrors={getErrors}
        url={url}
        headers={headers}
      />
    </div>
  )
}

export default File
