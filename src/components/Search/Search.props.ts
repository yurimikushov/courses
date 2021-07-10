import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface SearchProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onSearch: (searchQuery: string) => void
}

export type { SearchProps }
