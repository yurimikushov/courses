import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from '../../../interfaces'

interface ProductWithReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export type { ProductWithReviewsProps }
