import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | 'l'
  children: ReactNode
}

export type { PProps }
