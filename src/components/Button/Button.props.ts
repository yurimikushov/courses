import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
	appearance: 'primary' | 'ghost'
	arrow?: 'right' | 'down' | 'none'
}

export type { ButtonProps }
