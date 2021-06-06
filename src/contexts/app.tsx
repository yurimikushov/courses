import { createContext, PropsWithChildren, useState } from 'react'
import { TopLevelCategory } from '../enums'
import { IMenuItem } from '../interfaces'

interface IAppContext {
  firstCategory: TopLevelCategory
  menu: IMenuItem[]
  setMenu?: (menu: IMenuItem[]) => void
}

const AppContext = createContext<IAppContext>({
  firstCategory: TopLevelCategory.Courses,
  menu: [],
})

const AppContextProvider = ({
  firstCategory,
  menu,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

  if(!menu) {
    console.trace('is undefined')
  }

  const setMenu = (menu: IMenuItem[]) => {
    setMenuState(menu)
  }

  return (
    <AppContext.Provider
      value={{
        firstCategory,
        menu: menuState,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
