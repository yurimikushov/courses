import { LayoutProps } from './Layout.props'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'
import styles from './Layout.module.css'

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.layout}>
    <Header />
    <main>
      <Sidebar />
      {children}
    </main>
    <Footer />
  </div>
)

export { Layout }
