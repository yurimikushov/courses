import cn from 'classnames'
import { CardProps } from './Card.props'
import styles from './Card.module.css'

const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: CardProps): JSX.Element => (
  <div
    className={cn(className, styles.card, {
      [styles.whiteBlue]: color === 'whiteBlue',
    })}
    {...props}
  >
    {children}
  </div>
)

export { Card }
