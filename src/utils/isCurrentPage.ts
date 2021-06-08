import { IPageItem } from '../interfaces'

const isCurrentPage = (currentAlias: string, pages: IPageItem[]): boolean => {
  return pages.some(({ alias }) => currentAlias === alias)
}

export { isCurrentPage }
