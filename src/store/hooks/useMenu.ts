import { useDispatch, useSelector } from 'react-redux'
import { IMenuItem } from '../../interfaces'
import { setMenu as setMenuAction } from '../actions'
import { IStore } from '../store'

const useMenu = (): [IMenuItem[], (menu: IMenuItem[]) => void] => {
  const menu: IMenuItem[] = useSelector(({ menu }: IStore) => menu)

  const dispatch = useDispatch()
  const setMenu = (menu: IMenuItem[]) => dispatch(setMenuAction(menu))

  return [menu, setMenu]
}

export { useMenu }
