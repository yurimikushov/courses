import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number
  editable?: boolean
  setRating?: (rating: number) => void
}

export type { RatingProps }
