import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { firstLevelMenuItems } from '../../../constants'
import { AppContext } from '../../../contexts'
import { IPageItem } from '../../../interfaces'
import styles from './Menu.module.css'

const Menu = (): JSX.Element => {
  const { menu, activeFirstLevelMenu } = useContext(AppContext)

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
          {id === activeFirstLevelMenu && createSecondLevel()}
        </li>
      ))}
    </ul>
  )

  const createSecondLevel = () => {
    if (menu.length === 0) {
      return null
    }

    return (
      <ul className={styles.secondLevelMenuBox}>
        {menu.map(({ _id, pages }) => (
          <li key={_id.secondCategory}>
            <div className={styles.secondLevelMenuItem}>
              {_id.secondCategory}
            </div>
            {createThirdLevel(pages)}
          </li>
        ))}
      </ul>
    )
  }

  const createThirdLevel = (pages: IPageItem[]) => {
    if (pages.length === 0) {
      return null
    }

    return (
      <ul>
        {pages.map((page) => (
          <li key={page.category} className={styles.thirdLevelMenuItem}>
            {page.category}
          </li>
        ))}
      </ul>
    )
  }

  return <nav className={cn(styles.menu)}>{createFirstLevel()}</nav>
}

export { Menu }
