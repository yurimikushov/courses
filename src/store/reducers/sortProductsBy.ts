import { SortOptions } from '../../enums'
import { ISortProductsByActions } from '../actions'
import { SortProductsByActions } from '../actionTypes'

const initialState = SortOptions.Rating

const sortProductsByReducer = (
  state = initialState,
  { type }: ISortProductsByActions
): SortOptions => {
  switch (type) {
    case SortProductsByActions.RATING:
      return SortOptions.Rating
    case SortProductsByActions.PRICE:
      return SortOptions.Price
    default:
      return state
  }
}

export { sortProductsByReducer }
