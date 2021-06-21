import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from '../../interfaces'

interface ProductsWithReviewsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[]
}

export type { ProductsWithReviewsProps }
