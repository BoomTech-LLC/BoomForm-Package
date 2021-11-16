import { useState, useCallback } from "react"

export const useNativeValidationMessage = () => {
    const [validationMessageIsShown, setValidationMessageIsShown] = useState(false)

    const blurHandler = useCallback(field => {
        if (!validationMessageIsShown) {
            field.reportValidity()
        }

        setValidationMessageIsShown(validationMessageIsShown => !validationMessageIsShown)
    }, [validationMessageIsShown])

    return blurHandler
}