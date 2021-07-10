import Link from 'next/link'
import cn from 'classnames'
import { LogoProps } from './Logo.props'
import LogoIcon from './assets/logo.svg'
import styles from './Logo.module.css'

const Logo = ({ className }: LogoProps): JSX.Element => (
  <div className={cn(className, styles.logo)}>
    <Link href='/'>
      <a aria-label='Логотип сайта.'>
        <LogoIcon />
      </a>
    </Link>
  </div>
)

export { Logo }
