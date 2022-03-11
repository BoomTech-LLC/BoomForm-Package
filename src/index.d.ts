/// <reference types="typescript" />

interface IValidation {
  required?: { msg: string }
  HTMLValidate?: boolean
  min?: { msg: string; type: number | string; value: number | string }
  max?: { msg: string; type: number | string; value: number | string }
  email?: { msg: string }
  phone?: { msg: string }
  url?: { msg: string }
}

type UseField = (ids: string[]) => {
  id: string | number
  ids: string[]
  value: string
  touched: boolean
  neededValues: { [key: string]: { [key: string]: string } | string }
  newValues: { [key: string]: { [key: string]: string } | string | null }
  newErrors: { [key: string]: string }
  prevState: {
    errors: { [key: string]: string }
    touched: { [key: string]: boolean }
    values: { [key: string]: { [key: string]: string | null } | string | null }
    fields: {
      id: string | number
      initial: null | string
      type?: string | undefined
    }[]
  }
}

interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string | number
  type?: 'text' | 'number' | 'password' | 'phone' | 'email'
  initial?: string
  validation?: Pick<
    IValidation,
    'HTMLValidate' | 'required' | 'email' | 'max' | 'min' | 'phone' | 'url'
  >
}

interface ITextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  id: string | number
  initial?: string
  validation?: Pick<
    IValidation,
    'HTMLValidate' | 'required' | 'email' | 'max' | 'min' | 'phone' | 'url'
  >
}

interface IFileProps
  extends Omit<
    Exclude<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    'id'
  > {
  id: string | number
  validation?: Pick<IValidation, 'required' | 'HTMLValidate'>
}

interface ISelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  id: string | number
  initial: string
  options: { key: string | number; value: string }[]
  validation?: Pick<IValidation, 'required' | 'HTMLValidate'>
}

interface ICheckboxProps
  extends Omit<
    Exclude<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    'id' | 'name'
  > {
  id: string | number
  initial?: string
  name: string | number
  value: any
  validation?: Pick<IValidation, 'required' | 'HTMLValidate'>
}

interface IRadioProps
  extends Omit<
    Exclude<React.InputHTMLAttributes<HTMLInputElement>, 'type'>,
    'id' | 'name'
  > {
  id: string | number
  initial?: string
  name: string | number
  value: any
  validation?: Pick<IValidation, 'required' | 'HTMLValidate'>
}

interface ICustomProps {
  id: string | number
}

interface IErrorProps {
  id: string | number
}

export declare const useField: UseField

export declare const BoomForm: React.FC

export declare const Input: React.FC<IInputProps>

export declare const Textarea: React.FC<ITextareaProps>

export declare const File: React.FC<IFileProps>

export declare const Checkbox: React.FC<ICheckboxProps>

export declare const Select: React.FC<ISelectProps>

export declare const Radio: React.FC<IRadioProps>

export declare const Custom: React.FC<ICustomProps>

export declare const Viewer: React.FC

export declare const Error: React.FC<IErrorProps>
