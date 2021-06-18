import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from '../../../interfaces'

interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct
}

export type { ProductProps }
