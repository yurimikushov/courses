import cn from 'classnames'
import { Button } from '../../../../components'
import { ActionsProps } from './Actions.props'
import styles from './Actions.module.css'

const Actions = ({ className, ...props }: ActionsProps): JSX.Element => (
  <div className={cn(className, styles.actions)} {...props}>
    <Button appearance='primary'>Узнать подробнее</Button>
    <Button appearance='ghost' arrow='right'>
      Читать отзывы
    </Button>
  </div>
)

export { Actions }
