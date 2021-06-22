import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface ActionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showReviews: boolean
  onToggleShowReviews: () => void
}

export type { ActionsProps }
