import { SortOptions } from '../enums'
import { IProduct } from '../interfaces'

interface ISortReducerState {
  sort: SortOptions
  products: IProduct[]
}

interface ISortReducerAction {
  type: SortOptions
}

const sortByRating = (a: IProduct, b: IProduct) => {
  return a.initialRating < b.initialRating ? 1 : -1
}

const sortByPrice = (a: IProduct, b: IProduct) => {
  return a.price < b.price ? -1 : 1
}

const sortReducer = (
  state: ISortReducerState,
  { type }: ISortReducerAction
): ISortReducerState => {
  switch (type) {
    case SortOptions.Rating:
      return {
        sort: SortOptions.Rating,
        products: state.products.sort(sortByRating),
      }
    case SortOptions.Price:
      return {
        sort: SortOptions.Price,
        products: state.products.sort(sortByPrice),
      }
    default:
      return state
  }
}

export { sortReducer }
export type { ISortReducerState }
