import { IPageItem } from './IPageItem'

interface IMenuItem {
  _id: {
    secondCategory: string
  }
  pages: IPageItem[]
}

export type { IMenuItem }
