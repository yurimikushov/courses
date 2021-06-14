import cn from 'classnames'
import { TextareaProps } from './Textarea.props'
import styles from './Textarea.module.css'

const Textarea = ({
  value,
  className,
  ...props
}: TextareaProps): JSX.Element => (
  <textarea
    className={cn(className, styles.textarea)}
    value={value}
    {...props}
  />
)

export { Textarea }
