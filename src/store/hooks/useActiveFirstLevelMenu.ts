import { useSelector } from 'react-redux'
import { TopLevelCategory } from '../../enums'
import { IStore } from '../store'

const useActiveFirstLevelMenu = (): TopLevelCategory => {
  const activeFirstLevelMenu = useSelector(
    ({ activeFirstLevelMenu }: IStore) => activeFirstLevelMenu
  )

  return activeFirstLevelMenu
}

export { useActiveFirstLevelMenu }
