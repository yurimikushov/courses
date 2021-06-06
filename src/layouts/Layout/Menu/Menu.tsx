import { useContext } from 'react'
import cn from 'classnames'
import { AppContext } from '../../../contexts/app'
import { TopLevelCategory } from '../../../enums'
import { IPageItem } from '../../../interfaces'
import { firstLevelMenuItems } from './firstLevelMenuItems'
import styles from './Menu.module.css'

const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext)
  const firstCategory = TopLevelCategory.Courses 

  const createFirstLevel = () => (
    <ul>
      {firstLevelMenuItems.map(({ id, name, Icon }) => (
        <li key={id}>
          <div
            className={cn(styles.firstLevelMenuItem, {
              [styles.firstLevelMenuItemActivated]: id === firstCategory,
            })}
          >
            <Icon />
            <label>{name}</label>
          </div>
          {id === firstCategory && createSecondLevel()}
        </li>
      ))}
    </ul>
  )

  const createSecondLevel = () => (
    <ul className={styles.secondLevelMenuBox}>
      {menu.map(({_id, pages}) => (
        <li key={_id.secondCategory}>
          <div className={styles.secondLevelMenuItem}>
            {_id.secondCategory}
          </div>
          {createThirdLevel(pages)}
        </li>
      ))}
    </ul>
  )

  const createThirdLevel = (pages: IPageItem[]) => (
    <ul>
      {pages.map((page) => (
        <li key={page.category} className={styles.thirdLevelMenuItem}>
          {page.category}
        </li>
      ))}
    </ul>
  )

  return <nav className={cn(styles.menu)}>{createFirstLevel()}</nav>
}

export { Menu }
