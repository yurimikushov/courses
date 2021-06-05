import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface LabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm'
  children: ReactNode
  color?: 'primary' |'ghost' | 'gray'| 'green'|  'hh'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export type { LabelProps }
