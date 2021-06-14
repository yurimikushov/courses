import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  value: string
}

export type { TextareaProps }
