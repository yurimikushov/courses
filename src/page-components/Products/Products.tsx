import { Product } from './Product/Product'
import { ProductsProps } from './Products.props'

const Products = ({
  products,
  className,
  ...props
}: ProductsProps): JSX.Element => (
  <div className={className} {...props}>
    {products.map((product) => (
      <Product key={product._id} product={product} />
    ))}
  </div>
)

export { Products }
