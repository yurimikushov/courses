import cn from 'classnames'
import SortIcon from './assets/sort.svg'
import { SortItemProps } from './SortItem.props'
import styles from './SortItem.module.css'

const SortItem = ({ title, isActive, onClick }: SortItemProps): JSX.Element => (
  <div
    className={cn(styles.sortOption, {
      [styles.active]: isActive,
    })}
    onClick={onClick}
  >
    <SortIcon className={styles.sortIcon} />
    <div className={styles.title}>{title}</div>
  </div>
)

export { SortItem }
