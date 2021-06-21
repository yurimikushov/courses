import { ProductsWithReviewsProps } from './ProductsWithReviews.props'
import { ProductWithReviews } from './ProductWithReviews/ProductWithReviews'

const ProductsWithReviews = ({
  products,
  className,
  ...props
}: ProductsWithReviewsProps): JSX.Element => (
  <div className={className} {...props}>
    {products.map((product) => (
      <ProductWithReviews key={product._id} product={product} />
    ))}
  </div>
)

export { ProductsWithReviews }
