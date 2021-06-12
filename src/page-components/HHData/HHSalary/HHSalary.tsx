import cn from 'classnames'
import { formatRuPrice } from '../../../utils'
import StarIcon from '../assets/star.svg'
import { HHSalaryProps } from './HHSalary.props'
import styles from '../HHData.module.css'

const HHSalary = ({ title, salary, rating }: HHSalaryProps): JSX.Element => (
  <div className={styles.salary}>
    <div className={styles.title}>{title}</div>
    <div className={styles.salaryAmount}>{formatRuPrice(salary)}</div>
    <div className={styles.rating}>
      <StarIcon
        className={cn({
          [styles.filledStar]: 1 <= rating,
        })}
      />
      <StarIcon
        className={cn({
          [styles.filledStar]: 2 <= rating,
        })}
      />
      <StarIcon
        className={cn({
          [styles.filledStar]: 3 <= rating,
        })}
      />
    </div>
  </div>
)

export { HHSalary }
