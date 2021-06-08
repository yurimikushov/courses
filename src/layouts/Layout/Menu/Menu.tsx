import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { firstLevelMenuItems } from '../../../constants'
import { AppContext } from '../../../contexts'
import { IPageItem } from '../../../interfaces'
import styles from './Menu.module.css'

const Menu = (): JSX.Element => {
  const { menu, setMenu, activeFirstLevelMenu } = useContext(AppContext)

  const openSecondLevelMenu = (secondCategory: string): void => {
    if (!setMenu) {
      return
    }

    setMenu(
      menu.map((menuItem) => {
        if (menuItem._id.secondCategory === secondCategory) {
          menuItem.isOpen = !menuItem.isOpen
        }

        return menuItem
      })
    )
  }

  const createFirstLevel = () => (
    <ul>
      {firstLevelMenuItems.map(({ id, name, route, Icon }) => (
        <li key={id}>
          <Link href={`/${route}`}>
            <a>
              <div
                className={cn(styles.firstLevelMenuItem, {
                  [styles.firstLevelMenuItemActivated]:
                    id === activeFirstLevelMenu,
                })}
              >
                <Icon />
                <label>{name}</label>
              </div>
            </a>
          </Link>
          {id === activeFirstLevelMenu && createSecondLevel(route)}
        </li>
      ))}
    </ul>
  )

  const createSecondLevel = (route: string) => {
    if (menu.length === 0) {
      return null
    }

    return (
      <ul className={styles.secondLevelMenuBox}>
        {menu.map(({ _id, pages, isOpen }) => (
          <li key={_id.secondCategory}>
            <div
              className={styles.secondLevelMenuItem}
              onClick={() => openSecondLevelMenu(_id.secondCategory)}
            >
              {_id.secondCategory}
            </div>
            {isOpen && createThirdLevel(route, pages)}
          </li>
        ))}
      </ul>
    )
  }

  const createThirdLevel = (route: string, pages: IPageItem[]) => {
    if (pages.length === 0) {
      return null
    }

    return (
      <ul>
        {pages.map((page) => (
          <li key={page.category} className={styles.thirdLevelMenuItem}>
            <Link href={`/${route}/${page.alias}`}>
              <a>{page.category}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return <nav className={cn(styles.menu)}>{createFirstLevel()}</nav>
}

export { Menu }
