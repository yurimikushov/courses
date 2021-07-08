import cn from 'classnames'
import SortIcon from './assets/sort.svg'
import { SortItemProps } from './SortItem.props'
import styles from './SortItem.module.css'

const SortItem = ({ title, isActive, onClick, ...props }: SortItemProps): JSX.Element => (
  <button
    className={cn(styles.sortOption, {
      [styles.activated]: isActive,
    })}
    onClick={onClick}
    {...props}
  >
    <SortIcon className={styles.sortIcon} />
    <div>{title}</div>
  </button>
)

export { SortItem }
