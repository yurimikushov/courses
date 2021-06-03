import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3'
  children: ReactNode
}

export type { HeadingProps }
