import { SortProductsByActions } from '../actionTypes'

interface ISortProductsByActions {
  type: SortProductsByActions
}

const sortProductsByRating = (): ISortProductsByActions => ({
  type: SortProductsByActions.RATING,
})

const sortProductsByPrice = (): ISortProductsByActions => ({
  type: SortProductsByActions.PRICE,
})

export { sortProductsByRating, sortProductsByPrice }
export type { ISortProductsByActions }
