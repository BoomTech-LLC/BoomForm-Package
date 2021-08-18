import { DECLARE_FIELD, EDIT_FIELD, RESET_FORM } from './Types'
import {
  setNestedValue,
  handleRadioEdit,
  checkIdStructure
} from './../Helpers/global'
import {
  validate,
  handleValidateCheckbox,
  handleValidateSelect,
  handleValidateRadio
} from '../Helpers/validate'

let defaultErros = {}

export const reduser = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case DECLARE_FIELD: {
      const { id, initial, field } = payload
      let fields = [...state.fields]
      let values = { ...state.values }
      const touched = { ...state.touched }
      const errors = { ...state.errors }
      const isTouched = initial === null || initial === undefined ? false : true

      try {
        checkIdStructure(id, fields)
      } catch (error) {
        console.error(error)
        return state
      }

      const { validation, type, name, value } = field

      fields = fields
        ? [{ id, initial, ...field }, ...fields]
        : [{ id, initial, ...field }]

      switch (type) {
        case 'radio':
          if (name === undefined)
            throw new Error('`Radio` should have a name attribute')
          if (value === undefined)
            throw new Error('`Radio` should have a value attribute')

          touched[name] = isTouched

          const [radioInitial] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.initial)
          const [radioValidation] = fields
            .filter((field) => field.name === name)
            .filter((box) => box?.validation)

          const radioError = handleValidateRadio({
            value: radioInitial?.initial,
            validation: radioValidation?.validation
          })

          if (radioError) errors[name] = radioError
          else delete errors[name]
          break
        case 'checkbox':
          if (name === undefined)
            throw new Error('`Checkbox` should have a name attribute')
          if (value === undefined)
            throw new Error('`Checkbox` should have a value attribute')

          touched[name] = isTouched

          const [checkBoxInitial] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.initial)
          const [checkBoxValidation] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.validation)

          const checkBoxError = handleValidateCheckbox({
            value: checkBoxInitial?.initial,
            validation: checkBoxValidation?.validation
          })
          if (checkBoxError) errors[name || id] = checkBoxError
          else delete errors[name || id]

          break
        case 'select':
          touched[id] = isTouched
          const selectError = handleValidateSelect({
            value: initial,
            validation: validation
          })
          if (selectError) errors[id] = selectError
          else delete errors[id]
          break
        default:
          touched[id] = isTouched
          const defaultValidate = validate({ value: initial, validation })
          if (defaultValidate) errors[id] = defaultValidate
      }

      if (id.toString().includes('.'))
        values = setNestedValue(id, initial, values)
      else values[id] = initial

      defaultErros = { ...errors }

      return {
        ...state,
        values,
        touched,
        fields,
        errors
      }
    }

    case EDIT_FIELD: {
      const { id, value, type, name, validation } = payload
      const { fields } = state
      let values = { ...state.values }
      const touched = { ...state.touched }
      const errors = { ...state.errors }

      switch (type) {
        case 'radio':
          const { values: values_ } = handleRadioEdit(
            values,
            fields,
            name,
            id,
            value
          )
          touched[name] = true
          values = { ...values_ }

          const radioError = handleValidateRadio({ value, validation })
          if (radioError) errors[name] = radioError
          else delete errors[name]

          break

        case 'checkbox':
          if (id.toString().includes('.'))
            values = setNestedValue(id, value, values)
          else values[id] = value

          touched[name] = true
          const [checkboxValidation] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.validation)
          const checkBoxError = handleValidateCheckbox({
            value,
            validation: checkboxValidation?.validation
          })
          if (checkBoxError) errors[name] = checkBoxError
          else delete errors[name]

          break
        case 'select':
          if (id.toString().includes('.'))
            values = setNestedValue(id, value, values)
          else values[id] = value
          const selectError = handleValidateSelect({
            value,
            validation
          })
          if (selectError) errors[id] = selectError
          else delete errors[id]

          touched[id] = true
          break
        default:
          if (id.toString().includes('.'))
            values = setNestedValue(id, value, values)
          else values[id] = value

          const error = validate({ value, validation })
          if (error) errors[id] = error
          else delete errors[id]

          touched[id] = true
      }

      return {
        ...state,
        values,
        touched,
        errors
      }
    }
    case RESET_FORM: {
      const { fields } = state
      let { values, touched } = state
      fields.map((field) => {
        const { id, initial, type, name } = field
        const isTouched =
          initial === null || initial === undefined ? false : true
        if (id.toString().includes('.'))
          values = setNestedValue(id, initial, values)
        else values[id] = initial
        if (type === 'radio' || type === 'checkbox') touched[name] = isTouched
        else touched[id] = isTouched
      })

      return {
        ...state,
        values: values,
        touched: touched,
        errors: defaultErros
      }
    }

    default:
      return state
  }
}
