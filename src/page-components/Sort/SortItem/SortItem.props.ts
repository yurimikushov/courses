import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface SortItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  isActive: boolean
  onClick: () => void
}

export type { SortItemProps }
