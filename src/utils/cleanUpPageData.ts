import { ITopPage } from '../interfaces'

const cleanUpPageData = (page: ITopPage): ITopPage => {
  if (page.advantages) {
    page.advantages = page.advantages.filter(({ title }) => {
      return title.trim() !== ''
    })
  }

  return page
}

export { cleanUpPageData }
