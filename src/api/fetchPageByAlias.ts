import axios from 'axios'
import { ITopPage } from '../interfaces'
import { API } from '../constants'

const fetchPageByAlias = async (alias: string): Promise<ITopPage> => {
  const { data: page } = await axios.get<ITopPage>(
    `${API.topPage.findByAlias}/${alias}`
  )

  return page
}

export { fetchPageByAlias }
