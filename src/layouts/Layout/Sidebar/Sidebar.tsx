import Link from 'next/link'
import cn from 'classnames'
import { Search } from '../../../components'
import { useSearch } from '../../../hooks'
import { Menu } from '../Menu/Menu'
import Logo from '../Logo.svg'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const search = useSearch()

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div>
        <Search onSearch={search} />
      </div>
      <Menu />
    </div>
  )
}

export { Sidebar }
