import cn from 'classnames'
import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import ArrowIcon from './assets/arrow.svg'

const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => (
  <button
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
    {...props}
  >
    {children}
    {arrow !== 'none' && (
      <ArrowIcon
        className={cn(styles.arrow, {
          [styles.down]: arrow == 'down',
        })}
      />
    )}
  </button>
)

export { Button }
