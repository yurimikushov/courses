import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { SortOptions } from '../../enums'

interface TopPageHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  totalProducts: number
  sort: SortOptions
  onSort: (sort: SortOptions) => void
}

export type { TopPageHeaderProps }
