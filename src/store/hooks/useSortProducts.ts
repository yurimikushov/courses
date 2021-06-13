import { useDispatch, useSelector } from 'react-redux'
import { SortOptions } from '../../enums'
import { sortProductsByPrice, sortProductsByRating } from '../actions'
import { IStore } from '../store'

const useSortProducts = (): [SortOptions, (sort: SortOptions) => void] => {
  const sortBy = useSelector(({ sortProductsBy }: IStore) => sortProductsBy)

  const dispatch = useDispatch()

  const sortByHandler = (sort: SortOptions): void => {
    switch (sort) {
      case SortOptions.Rating:
        dispatch(sortProductsByRating())
        break
      case SortOptions.Price:
        dispatch(sortProductsByPrice())
        break
      default:
        break
    }
  }

  return [sortBy, sortByHandler]
}

export { useSortProducts }
