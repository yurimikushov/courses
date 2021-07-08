import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface SortItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string
  isActive: boolean
  onClick: () => void
}

export type { SortItemProps }
