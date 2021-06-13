import { useReducer } from 'react'
import { SortOptions } from '../enums'
import { IProduct } from '../interfaces'
import { sortReducer, ISortReducerState } from '../reducers'

const useProductsSort = (
  initialState: ISortReducerState
): {
  sort: SortOptions
  products: IProduct[]
  setSort: (sort: SortOptions) => void
} => {
  const [{ sort, products }, sortDispatch] = useReducer(
    sortReducer,
    initialState
  )

  const setSort = (sort: SortOptions) => sortDispatch({ type: sort })

  return {
    sort,
    products,
    setSort,
  }
}

export { useProductsSort }
