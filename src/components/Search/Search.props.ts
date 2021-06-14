import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface SearchProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onSearch: () => void
}

export type { SearchProps }
