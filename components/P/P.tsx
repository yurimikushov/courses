import cn from 'classnames'
import { PProps } from './P.props'
import styles from './P.module.css'

const P = ({ size ='m', children, className, ...props }: PProps): JSX.Element => (
  <p
    className={cn(className, {
      [styles.l]: size === 'l',
      [styles.m]: size === 'm',
      [styles.s]: size === 's',
    })}
    {...props}
  >
    {children}
  </p>
)

export { P }
