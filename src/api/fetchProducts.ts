import axios from "axios"
import { IProduct } from "../interfaces"
import { API } from "../constants"

const fetchProducts = async (category: string): Promise<IProduct[]> => {
  const { data: products } = await axios.post<IProduct[]>(API.product.find, {
    category,
    limit: 10,
  })

  return products
}

export { fetchProducts }
