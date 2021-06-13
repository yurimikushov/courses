import cn from 'classnames'
import SortIcon from './assets/sort.svg'
import { SortItemProps } from './SortItem.props'
import styles from './SortItem.module.css'

const SortItem = ({ title, isActive, onClick }: SortItemProps): JSX.Element => (
  <span
    className={cn(styles.sortOption, {
      [styles.active]: isActive,
    })}
    onClick={onClick}
  >
    <SortIcon className={styles.sortIcon} />
    <span className={styles.title}>{title}</span>
  </span>
)

export { SortItem }
