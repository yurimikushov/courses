import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface HHVacanciesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  count: number
}

export type { HHVacanciesProps }
