import cn from 'classnames'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => (
  <div className={cn(className, styles.header)} {...props}>Header</div>
)

export { Header }
