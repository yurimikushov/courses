import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import { Up } from '../../components'
import Logo from './Logo.svg'
import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false)

  const { asPath } = useRouter()

  useEffect(() => {
    setMenuIsOpened(false)
  }, [asPath])

  const onToggleMenuIsOpened = (): void => {
    setMenuIsOpened((open) => !open)
  }

  return (
    <div className={styles.wrapper}>
      <Header
        className={cn(styles.header, {
          [styles.isOpened]: menuIsOpened,
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
