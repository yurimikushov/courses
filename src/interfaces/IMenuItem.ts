interface PageItem {
  _id: string
  alias: string
  title: string
  category: string
}

interface IMenuItem {
  _id: {
    secondCategory: string
  }
  pages: PageItem[]
}

export type { IMenuItem }
