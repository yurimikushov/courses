import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance?: 'success' | 'error'
  onClose: () => void
  children: ReactNode
}

export type { AlertProps }
