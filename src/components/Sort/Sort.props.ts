import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { SortOptions } from '../../enums'

interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortOptions
  onSort: (sort: SortOptions) => void
}

export type { SortProps }