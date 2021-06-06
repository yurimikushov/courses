import { useContext } from 'react'
import cn from 'classnames'
import { AppContext } from '../../../contexts/app'
import { IMenuItem } from '../../../interfaces'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const { menu, setMenu } = useContext(AppContext)

  const deleteMenuItem = (item: IMenuItem): void => {
    if (setMenu) {
      setMenu(menu.filter((currentItem) => currentItem !== item))
    }
  }

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <ul>
        {menu && menu.map((item) => (
          <li
            key={item._id.secondCategory}
            onClick={() => deleteMenuItem(item)}
          >
            {item._id.secondCategory}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Sidebar }
