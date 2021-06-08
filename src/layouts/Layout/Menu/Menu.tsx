import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { AppContext } from '../../../contexts'
import { IPageItem } from '../../../interfaces'
import styles from './Menu.module.css'
import { firstLevelMenuItems } from '../../../constants'

interface SecondLevelMenuProps {
  route: string
}

interface ThirdLevelMenuProps {
  route: string
  pages: IPageItem[]
}

const Menu = (): JSX.Element => {
  const { menu, setMenu, activeFirstLevelMenu } = useContext(AppContext)

  const FirstLevelMenu = (): JSX.Element => (
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
          {id === activeFirstLevelMenu && <SecondLevelMenu route={route} />}
        </li>
      ))}
    </ul>
  )

  const SecondLevelMenu = ({
    route,
  }: SecondLevelMenuProps): JSX.Element | null => {
    if (menu.length === 0) {
      return null
    }

    const openMenu = (secondCategory: string): void => {
      setMenu &&
        setMenu(
          menu.map((menuItem) => {
            if (menuItem._id.secondCategory === secondCategory) {
              menuItem.isOpen = !menuItem.isOpen
            }

            return menuItem
          })
        )
    }

    return (
      <ul className={styles.secondLevelMenuBox}>
        {menu.map(({ _id, pages, isOpen }) => (
          <li key={_id.secondCategory}>
            <div
              className={styles.secondLevelMenuItem}
              onClick={() => openMenu(_id.secondCategory)}
            >
              {_id.secondCategory}
            </div>
            {isOpen && <ThirdLevelMenu route={route} pages={pages} />}
          </li>
        ))}
      </ul>
    )
  }

  const ThirdLevelMenu = ({
    route,
    pages,
  }: ThirdLevelMenuProps): JSX.Element | null => {
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

  return (
    <nav className={cn(styles.menu)}>
      <FirstLevelMenu />
    </nav>
  )
}

export { Menu }
