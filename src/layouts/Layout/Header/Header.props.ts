import { DetailedHTMLProps, HTMLAttributes, } from 'react'

interface HeaderProps  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menuIsOpened: boolean
  onToggleMenu: () => void
}

export type { HeaderProps }
