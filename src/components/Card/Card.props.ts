import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'whiteBlue'
  children: ReactNode
}

export type { CardProps }
