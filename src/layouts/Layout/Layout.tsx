import { Up } from '../../components'
import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <main className={styles.body}>
      {children}
    </main>
    <Footer className={styles.footer} />
    <Up />
  </div>
)

export { Layout }
