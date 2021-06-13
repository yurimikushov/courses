import { useSelector } from 'react-redux'
import { SortOptions } from '../../enums'
import { IProduct } from '../../interfaces'
import { IStore } from '../store'
import { useSortProducts } from './useSortProducts'

const useSortedProducts = (): IProduct[] => {
  const [sortBy] = useSortProducts()
  const products = useSelector(({ products }: IStore) => products)

  if (sortBy === SortOptions.Price) {
    return [...products].sort((a: IProduct, b: IProduct) =>
      a.price < b.price ? -1 : 1
    )
  }

  return [...products].sort((a: IProduct, b: IProduct) =>
    a.initialRating < b.initialRating ? 1 : -1
  )
}

export { useSortedProducts }
