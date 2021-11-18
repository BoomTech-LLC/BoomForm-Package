export const checkFieldValidationExisting = (state, id) => {
    const field = state.fields.find((field) => {
        if (field.id === id && field.validation !== undefined && field.validation.required !== undefined) {
            return true
        }

        return false
    })

    return field === undefined ? false : true
}