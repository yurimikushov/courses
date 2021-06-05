import cn from 'classnames'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'

const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
  <div className={cn(styles.footer, className)} {...props}>Footer</div>
)

export { Footer }
