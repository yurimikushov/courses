import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IReview } from '../../../interfaces'

interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IReview
}

export type { ReviewProps }
