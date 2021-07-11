import cn from 'classnames'
import { AlertProps } from './Alert.props'
import CloseIcon from './close.svg'
import styles from './Alert.module.css'

const Alert = ({
  appearance = 'success',
  onClose,
  children,
  className,
  ...props
}: AlertProps): JSX.Element => (
  <div
    className={cn(className, styles.alert, {
      [styles.success]: appearance === 'success',
      [styles.error]: appearance === 'error',
    })}
    {...props}
    role='alert'
  >
    {children}
    <button className={styles.close} onClick={onClose}>
      <CloseIcon aria-label='Закрыть оповещение.' />
    </button>
  </div>
)

export { Alert }
