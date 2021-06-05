import cn from 'classnames'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
  <div className={cn(className, styles.sidebar)} {...props}>Sidebar</div>
)

export { Sidebar }
