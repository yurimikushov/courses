import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string
}

export type { InputProps }
