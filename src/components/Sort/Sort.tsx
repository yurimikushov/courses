import { SortOptions } from '../../enums'
import { SortItem } from './SortItem/SortItem'
import { SortProps } from './Sort.props'

const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => (
  <div className={className} {...props}>
    <SortItem
      title='По рейтингу'
      isActive={sort === SortOptions.Rating}
      onClick={() => setSort(SortOptions.Rating)}
    />
    <SortItem
      title='По цене'
      isActive={sort === SortOptions.Price}
      onClick={() => setSort(SortOptions.Price)}
    />
  </div>
)

export { Sort }
