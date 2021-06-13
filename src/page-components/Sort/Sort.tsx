import { SortOptions } from '../../enums'
import { SortItem } from './SortItem/SortItem'
import { SortProps } from './Sort.props'
import { useSortProducts } from '../../store/hooks'

const Sort = ({ className, ...props }: SortProps): JSX.Element => {
  const [sortBy, onSortBy] = useSortProducts()

  return (
    <div className={className} {...props}>
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
