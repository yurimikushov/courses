import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface TopPageTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  totalProducts: number
}

export type { TopPageTitleProps }
