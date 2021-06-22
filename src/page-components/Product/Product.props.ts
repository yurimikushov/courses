import { IProduct } from '../../interfaces'

interface ProductProps {
  product: IProduct
  showReviews: boolean
  onToggleShowReviews: () => void
  className?: string
}

export type { ProductProps }
