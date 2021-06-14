import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

interface SearchProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onSearch: (searchQuery: string) => void
}

export type { SearchProps }
