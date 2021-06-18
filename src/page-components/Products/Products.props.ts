import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from '../../interfaces'

interface ProductsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[]
}

export type { ProductsProps }
