import { createContext, PropsWithChildren, useState } from 'react'
import { IMenuItem } from '../interfaces'

interface IAppContext {
  menu: IMenuItem[]
  setMenu?: (menu: IMenuItem[]) => void
}

const AppContext = createContext<IAppContext>({
  menu: [],
})

const AppContextProvider = ({
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
        menu: menuState,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
