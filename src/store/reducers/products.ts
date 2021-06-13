import { IProduct } from '../../interfaces'
import { IProductsActions } from '../actions'
import { ProductsActions } from '../actionTypes'

const initialState: IProduct[] = []

const productsReducer = (
  state = initialState,
  { type, payload }: IProductsActions
): IProduct[] => {
  switch (type) {
    case ProductsActions.SET:
      return payload.products
    default:
      return state
  }
}

export { productsReducer }
