import cn from 'classnames'
import { HLineProps } from './HLine.props'
import styles from './HLine.module.css'

const HLine = ({ className, ...props }: HLineProps): JSX.Element => (
  <hr className={cn(className, styles.hr)} {...props} />
)

export { HLine }
