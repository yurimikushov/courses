import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface TopPageHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  totalProducts: number
}

export type { TopPageHeaderProps }
