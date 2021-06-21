import { Reviews } from '../Reviews/Reviews'
import { Product } from './Product/Product'
import { ProductsProps } from './Products.props'
import styles from './Products.module.css'

const Products = ({
  products,
  className,
  ...props
}: ProductsProps): JSX.Element => (
  <div className={className} {...props}>
    {products.map((product) => (
      <div key={product._id} className={styles.productWithReviews}>
        <Product product={product} />
        {product.reviews.length > 0 && <Reviews reviews={product.reviews} />}
      </div>
    ))}
  </div>
)

export { Products }
