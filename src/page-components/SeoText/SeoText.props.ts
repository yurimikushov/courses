import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface SeoTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  text: string
}

export type { SeoTextProps }
