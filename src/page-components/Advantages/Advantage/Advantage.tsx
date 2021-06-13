import CheckIcon from './assets/check.svg'
import { Heading, P } from '../../../components'
import { AdvantageProps } from './Advantage.props'
import styles from './Advantage.module.css'

const Advantage = ({ title, description }: AdvantageProps): JSX.Element => (
  <div className={styles.advantage}>
    <CheckIcon />
    <Heading tag='h3'>{title}</Heading>
    {description && <div className={styles.vLine} />}
    {description && <P size='s'>{description}</P>}
  </div>
)

export { Advantage }
