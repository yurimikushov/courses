import { IProduct } from '../../interfaces'
import { ProductsActions } from '../actionTypes'

interface IProductsActions {
  type: ProductsActions
  payload: {
    products: IProduct[]
  }
}

const setProducts = (products: IProduct[]): IProductsActions => ({
  type: ProductsActions.SET,
  payload: {
    products,
  },
})

export { setProducts }
export type { IProductsActions }
