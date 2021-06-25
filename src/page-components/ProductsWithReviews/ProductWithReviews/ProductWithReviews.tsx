import cn from 'classnames'
import { Product } from '../../Product/Product'
import { Reviews } from '../../Reviews/Reviews'
import { ProductWithReviewsProps } from './ProductWithReviews.props'
import styles from './ProductWithReviews.module.css'
import { useState } from 'react'

const ProductWithReviews = ({
  product,
  className,
  ...props
}: ProductWithReviewsProps): JSX.Element => {
  const [showReviews, setShowReviews] = useState<boolean>(false)
  const toggleShowReviews = () => setShowReviews((show) => !show)

  return (
    <div className={cn(className, styles.productWithReviews)} {...props}>
      <Product
        product={product}
        showReviews={showReviews}
        onToggleShowReviews={toggleShowReviews}
      />
      {showReviews && <Reviews productId={product._id} reviews={product.reviews} />}
    </div>
  )
}

export { ProductWithReviews }
