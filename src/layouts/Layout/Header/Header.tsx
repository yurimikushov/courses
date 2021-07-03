import Link from 'next/link'
import cn from 'classnames'
import Logo from '../Logo.svg'
import OpenIcon from './assets/open.svg'
import CloseIcon from './assets/close.svg'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({
  menuIsOpened,
  onToggleMenu,
  className,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <button className={styles.menu} onClick={() => onToggleMenu()}>
        {menuIsOpened ? <CloseIcon /> : <OpenIcon />}
      </button>
    </header>
  )
}

export { Header }
