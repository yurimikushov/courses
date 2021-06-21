import cn from 'classnames'
import { Product } from '../../Product/Product'
import { Reviews } from '../../Reviews/Reviews'
import { ProductWithReviewsProps } from './ProductWithReviews.props'
import styles from './ProductWithReviews.module.css'

const ProductWithReviews = ({
  product,
  className,
  ...props
}: ProductWithReviewsProps): JSX.Element => (
  <div className={cn(className, styles.productWithReviews)} {...props}>
    <Product product={product} />
    {product.reviews.length > 0 && <Reviews reviews={product.reviews} />}
  </div>
)

export { ProductWithReviews }
