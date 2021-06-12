import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface HHSalaryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  salary: number
  rating: 1 | 2 | 3
}

export type { HHSalaryProps }
