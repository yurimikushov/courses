import cn from 'classnames'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => (
  <header className={cn(className, styles.header)} {...props}>Header</header>
)

export { Header }
