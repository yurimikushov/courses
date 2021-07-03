import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { Up } from '../../components'
import { useScrollY } from '../../hooks'
import Logo from './Logo.svg'
import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false)

  const onToggleMenuIsOpened = (): void => {
    setMenuIsOpened((open) => !open)
  }

  const { asPath } = useRouter()

  useEffect(() => {
    setMenuIsOpened(false)
  }, [asPath])

  const scrollY = useScrollY()

  return (
    <div className={styles.wrapper}>
      <Header
        className={cn(styles.header, {
          [styles.isOpened]: menuIsOpened,
          [styles.shadowed]: scrollY > 0 && !menuIsOpened,
        })}
        menuIsOpened={menuIsOpened}
        onToggleMenu={onToggleMenuIsOpened}
      />
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <Sidebar
        className={cn(styles.sidebar, {
          [styles.isOpened]: menuIsOpened,
        })}
      />
      <main className={styles.body}>{children}</main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  )
}

export { Layout }
