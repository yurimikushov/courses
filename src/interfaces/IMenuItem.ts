import { IPageItem } from './IPageItem'

interface IMenuItem {
  _id: {
    secondCategory: string
  }
  pages: IPageItem[]
  isOpen?: boolean
}

export type { IMenuItem }
