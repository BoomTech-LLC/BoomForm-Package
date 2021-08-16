import React, { useContext, useRef, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import classNames from 'classnames/bind'
import context from '../../../Store/Context'
import { getFieldValue } from '../../../Helpers/global'

const Signature = ({ id, initial, label, classnameprefix, ...props }) => {
  const { state, actions } = useContext(context)
  const { handleChange, declareField } = actions

  useEffect(() => {
    const actualInitial = initial === undefined ? null : initial
    declareField({
      id,
      initial: actualInitial,
      field: { type: 'signature', ...props }
    })
  }, [id, initial])
  const sigPadRef = useRef()
  const { values } = state

  const value = getFieldValue(values, id)

  if (value === undefined) return null

  const handleTrim = () => {
    const url = sigPadRef.current.getTrimmedCanvas().toDataURL('image/png')
    handleChange({
      id,
      value: url,
      e: sigPadRef.current,
      field: { id, initial, ...props }
    })
  }
  const handleClear = () => {
    handleChange({
      id,
      value: null,
      e: sigPadRef.current,
      field: { id, initial, ...props }
    })
    sigPadRef.current.clear()
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
      <SignatureCanvas
        ref={sigPadRef}
        penColor='#000'
        canvasProps={{
          height: '200px',
          className: 'signatureCanvas'
        }}
        onEnd={handleTrim}
        clearOnResize={false}
      />
      <div
        className={classNames('boomForm-signatureButton__content', {
          [`${classnameprefix}-signatureButton__content`]: classnameprefix
        })}
      >
        <div onClick={handleClear}>Clear</div>
      </div>
    </div>
  )
}

export default Signature
