import { HHVacanciesProps } from './HHVacancies.props'
import styles from '../HHData.module.css'

const HHVacancies = ({ title, count }: HHVacanciesProps): JSX.Element => (
  <>
    <div className={styles.title}>{title}</div>
    <div className={styles.count}>{count}</div>
  </>
)

export { HHVacancies }
