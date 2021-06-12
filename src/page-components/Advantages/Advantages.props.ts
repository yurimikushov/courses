import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ITopPageAdvantage } from '../../interfaces'

interface AdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: ITopPageAdvantage[]
}

export type { AdvantagesProps }
