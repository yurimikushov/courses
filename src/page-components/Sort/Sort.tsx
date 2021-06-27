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
      <SortItem
        title='По рейтингу'
        isActive={sortBy === SortOptions.Rating}
        onClick={() => onSortBy(SortOptions.Rating)}
      />
      <SortItem
        title='По цене'
        isActive={sortBy === SortOptions.Price}
        onClick={() => onSortBy(SortOptions.Price)}
      />
    </div>
  )
}

export { Sort }
