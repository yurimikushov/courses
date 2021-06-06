import cn from 'classnames'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import { Menu } from '../Menu/Menu'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
  <div className={cn(className, styles.sidebar)} {...props}>
    <Menu />
  </div>
)

export { Sidebar }
