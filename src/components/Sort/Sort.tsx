import { SortOptions } from '../../enums'
import { SortItem } from './SortItem/SortItem'
import { SortProps } from './Sort.props'

const Sort = ({
  sort,
  onSort,
  className,
  ...props
}: SortProps): JSX.Element => (
  <div className={className} {...props}>
    <SortItem
      title='По рейтингу'
      isActive={sort === SortOptions.Rating}
      onClick={() => onSort(SortOptions.Rating)}
    />
    <SortItem
      title='По цене'
      isActive={sort === SortOptions.Price}
      onClick={() => onSort(SortOptions.Price)}
    />
  </div>
)

export { Sort }
