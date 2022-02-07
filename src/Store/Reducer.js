import { DECLARE_FIELD, EDIT_FIELD, RESET_FORM, SET_TOUCHED } from './Types'
import {
  setNestedValue,
  checkIdStructure,
  deepCopy,
  changeFieldInitial
} from './../Helpers/global'
import { validate, handleValidateSelect } from '../Helpers/validate'
import Events from '../Events'

let defaultValues = {},
  defaultTouched = {},
  defaultErros = {}

export const reduser = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case DECLARE_FIELD: {
      const { id, initial, field } = payload
      const { validation, type } = field
      let { fields } = state
      let { values } = state
      values = deepCopy(values)
      const touched = { ...state.touched }
      const errors = { ...state.errors }
      const isTouched = !initial ? false : true

      for (let i = 0; i < fields.length; i++)
        if (
          fields[i].id === id &&
          fields[i].initial !== initial &&
          initial !== null &&
          initial !== undefined
        ) {
          fields[i].initial = initial
          values = {
            ...values,
            ...changeFieldInitial({ id, initial, values })
          }
          const defaultValidate = validate({
            type,
            value: initial,
            validation
          })

          touched[id] = isTouched
          if (defaultValidate) errors[id] = defaultValidate
          else delete errors[id]
          return { ...state, fields, values, touched, errors }
        } else if (fields[i].id === id) return state

      try {
        checkIdStructure(id, fields)
      } catch (error) {
        console.error(error)
        return state
      }

      fields = fields
        ? [{ id, initial, ...field }, ...fields]
        : [{ id, initial, ...field }]

      switch (type) {
        case 'select':
          {
            touched[id] =
              initial && initial.key !== 'placeholder' ? true : false
            const selectError = handleValidateSelect({
              value: initial,
              validation: validation
            })
            if (selectError) errors[id] = selectError
            else delete errors[id]
          }
          break
        default: {
          touched[id] = isTouched
          const defaultValidate = validate({ type, value: initial, validation })
          if (defaultValidate) errors[id] = defaultValidate
        }
      }

      if (id.toString().includes('.')) {
        values = setNestedValue(id, initial, values)
        defaultValues = setNestedValue(id, initial, defaultValues)
      } else {
        values[id] = initial
        defaultValues[id] = initial
      }

      defaultTouched[id] = touched[id]
      if (errors[id]) defaultErros[id] = errors[id]

      return {
        ...state,
        values,
        touched,
        fields,
        errors
      }
    }

    case EDIT_FIELD: {
      const { id, value, handleChange } = payload
      const { fields } = state
      const field = fields.find((field) => String(field.id) === String(id))
      if (!field) return state
      const { type, name, validation } = field
      let { values } = state
      values = deepCopy(values)
      const errors = { ...state.errors }

      if (field.hasOwnProperty('onChange'))
        field.onChange({
          id,
          value,
          field,
          handleChange,
          state
        })

      switch (type) {
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

          const error = validate({ type, value, validation })

          if (error) errors[id] = error
          else delete errors[id]
      }

      Events.emitFieldChange(id, {
        id,
        state,
        values,
        errors,
        touched: state.touched[id]
      })

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

    case SET_TOUCHED: {
      const { id, handleBlur } = payload
      const { fields } = state
      const [field] = fields.filter((field) => String(field.id) === String(id))
      const touched = { ...state.touched }

      if (field && field.hasOwnProperty('onBlur'))
        field.onBlur({
          id,
          field,
          handleBlur
        })

      touched[id] = true

      return {
        ...state,
        touched
      }
    }

    default:
      return state
  }
}
