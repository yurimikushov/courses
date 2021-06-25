import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IReview } from '../../interfaces'

interface ReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string
  reviews: IReview[]
}

export type { ReviewsProps }
