import cn from 'classnames'
import { SortOptions } from '../../enums'
import { useSortProducts } from '../../store/hooks'
import { SortItem } from './SortItem/SortItem'
import { SortProps } from './Sort.props'
import styles from './Sort.module.css'

const Sort = ({ className, ...props }: SortProps): JSX.Element => {
  const [sortBy, onSortBy] = useSortProducts()

  return (
    <div className={cn(className, styles.sort)} {...props}>
      <div id='sort-title' style={{ display: 'none' }}>
        Сортировка
      </div>
      <SortItem
        id='sort-by-rating'
        title='По рейтингу'
        isActive={sortBy === SortOptions.Rating}
        onClick={() => onSortBy(SortOptions.Rating)}
        aria-label='По рейтингу'
        aria-labelledby='sort-title sort-by-rating'
        aria-selected={sortBy === SortOptions.Rating}
      />
      <SortItem
        id='sort-by-price'
        title='По цене'
        isActive={sortBy === SortOptions.Price}
        onClick={() => onSortBy(SortOptions.Price)}
        aria-label='По цене'
        aria-labelledby='sort-title sort-by-price'
        aria-selected={sortBy === SortOptions.Price}
      />
    </div>
  )
}

export { Sort }
