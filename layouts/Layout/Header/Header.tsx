import cn from 'classnames'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => (
  <div className={cn(styles.header, className)} {...props}>Header</div>
)

export { Header }
