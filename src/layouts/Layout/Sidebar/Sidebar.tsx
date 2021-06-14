import Link from 'next/link'
import cn from 'classnames'
import { Search } from '../../../components'
import { Menu } from '../Menu/Menu'
import Logo from '../Logo.svg'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
  <div className={cn(className, styles.sidebar)} {...props}>
    <div>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
    </div>
    <div>
      <Search onSearch={() => console.log('searching...')} />
    </div>
    <Menu />
  </div>
)

export { Sidebar }
