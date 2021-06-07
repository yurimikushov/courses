import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import { TopLevelCategory } from '../enums'
import { IMenuItem } from '../interfaces'

interface IAppContext {
  menu: IMenuItem[]
  setMenu?: (menu: IMenuItem[]) => void
  activeFirstLevelMenu: TopLevelCategory
}

const AppContext = createContext<IAppContext>({
  menu: [],
  activeFirstLevelMenu: TopLevelCategory.Courses,
})

const AppContextProvider = ({
  menu = [],
  activeFirstLevelMenu = TopLevelCategory.Courses,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

  useEffect(() => {
    setMenuState(menu)
  }, [menu])

  const setMenu = (menu: IMenuItem[]) => {
    setMenuState(menu)
  }

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
        setMenu,
        activeFirstLevelMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
