import cn from 'classnames'
import { LabelProps } from './Label.props'
import styles from './Label.module.css'

const Label = ({
  size = 'm',
  children,
  color = 'ghost',
  href,
  target = '_blank',
  className,
  ...props
}: LabelProps): JSX.Element => (
  <div
    className={cn(styles.label, className, {
      [styles.m]: size === 'm',
      [styles.s]: size === 's',
      [styles.primary]: color === 'primary',
      [styles.ghost]: color === 'ghost',
      [styles.gray]: color === 'gray',
      [styles.green]: color === 'green',
      [styles.hh]: color === 'hh',
    })}
    {...props}
  >
    {href ? <a href={href} target={target}>{children}</a> : <>{children}</>}
  </div>
)

export { Label }
