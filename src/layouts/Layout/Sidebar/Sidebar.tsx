import cn from 'classnames'
import { Search } from '../../../components'
import { useSearch } from '../../../hooks'
import { Menu } from '../Menu/Menu'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const search = useSearch()

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div>
        <Search onSearch={search} />
      </div>
      <Menu />
    </div>
  )
}

export { Sidebar }
