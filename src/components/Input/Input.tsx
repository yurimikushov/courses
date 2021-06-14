import cn from 'classnames'
import { InputProps } from './Input.props'
import styles from './Input.module.css'

const Input = ({ value, className, ...props }: InputProps): JSX.Element => (
  <input
    className={cn(className, styles.input)}
    value={value}
    {...props}
  />
)

export { Input }
