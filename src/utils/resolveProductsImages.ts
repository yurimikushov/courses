import { IProduct } from '../interfaces'

const resolveProductsImages = (products: IProduct[]): IProduct[] => {
  return products.map((product) => {
    product.image = process.env.NEXT_PUBLIC_API + product.image
    return product
  })
}

export { resolveProductsImages }
