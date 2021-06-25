import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  productId: string
}

export type { ReviewFormProps }
