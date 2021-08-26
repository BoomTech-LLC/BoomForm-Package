import { DECLARE_FIELD, EDIT_FIELD, RESET_FORM, SET_TOCUED } from './Types'
import {
  setNestedValue,
  handleRadioEdit,
  checkIdStructure,
  deepCopy,
  getIdsByName,
  getNestedValue
} from './../Helpers/global'
import {
  validate,
  handleValidateCheckbox,
  handleValidateSelect,
  handleValidateRadio
} from '../Helpers/validate'

let defaultValues = {},
  defaultTouched = {},
  defaultErros = {}

export const reduser = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case DECLARE_FIELD: {
      const { id, initial, field } = payload
      let fields = [...state.fields]
      let { values } = state
      values = deepCopy(values)
      const touched = { ...state.touched }
      const errors = { ...state.errors }
      const isTouched = initial === null || initial === undefined ? false : true

      for (let i = 0; i < fields.length; i++)
        if (fields[i].id === id) return state

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

          if (!touched[name]) touched[name] = initial.checked

          const [radioInitial] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.initial?.checked)
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

          if (!touched[name]) touched[name] = initial.checked

          const [checkBoxInitial] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.initial.checked)
          const [checkBoxValidation] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.validation)

          const checkBoxError = handleValidateCheckbox({
            value: checkBoxInitial?.initial,
            validation: checkBoxValidation?.validation
          })

          if (checkBoxError) errors[name] = checkBoxError
          else delete errors[name]

          break
        case 'select':
          touched[id] = initial.key !== 'placeholder' ? true : false
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

      defaultValues = { ...values }
      defaultTouched = { ...touched }
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
      let { values } = state
      values = deepCopy(values)
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
          values = { ...values_ }
          delete errors[name]

          break

        case 'checkbox':
          if (id.toString().includes('.'))
            values = setNestedValue(id, value, values)
          else values[id] = value

          const groupedIds = getIdsByName(name, fields)
          let isSomeChecked = false
          groupedIds.map((checkboxId) => {
            let currentValue = null
            if (checkboxId.toString().includes('.'))
              currentValue = getNestedValue(values, checkboxId)
            else currentValue = values[checkboxId]

            if (currentValue.checked) isSomeChecked = true
          })

          const [checkboxValidation] = fields
            .filter((field) => field.name === name)
            .filter((box) => box.validation)

          const checkBoxError = handleValidateCheckbox({
            value: isSomeChecked,
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

          break
        default:
          if (id.toString().includes('.'))
            values = setNestedValue(id, value, values)
          else values[id] = value

          const error = validate({ value, validation })
          if (error) errors[id] = error
          else delete errors[id]
      }

      return {
        ...state,
        values,
        errors
      }
    }

    case RESET_FORM: {
      return {
        ...state,
        values: defaultValues,
        touched: defaultTouched,
        errors: defaultErros
      }
    }

    case SET_TOCUED: {
      const { id, type, name } = payload
      const touched = { ...state.touched }

      switch (type) {
        case 'radio':
        case 'checkbox':
          touched[name] = true
          break
        default:
          touched[id] = true
      }

      return {
        ...state,
        touched
      }
    }

    default:
      return state
  }
}
