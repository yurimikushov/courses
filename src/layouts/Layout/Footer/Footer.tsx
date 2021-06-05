import cn from 'classnames'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'

const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
  <div className={cn(className, styles.footer)} {...props}>Footer</div>
)

export { Footer }
