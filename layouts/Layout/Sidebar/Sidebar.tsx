import cn from 'classnames'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
  <div className={cn(styles.sidebar, className)} {...props}>Sidebar</div>
)

export { Sidebar }
