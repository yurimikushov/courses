import { Heading, Label, Card } from '../../components'
import { HHVacancies } from './HHVacancies/HHVacancies'
import { HHSalary } from './HHSalary/HHSalary'
import { HHDataProps } from './HHData.props'
import styles from './HHData.module.css'

const HHData = ({
  category,
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HHDataProps): JSX.Element => (
  <div>
    <div className={styles.header}>
      <Heading tag='h2'>Вакансии - {category}</Heading>
      <Label className={styles.hhLabel} color='hh'>hh.ru</Label>
    </div>
    <div className={styles.hh}>
      <Card className={styles.vacancies}>
        <HHVacancies title='Всего вакансий' count={count} />
      </Card>
      <Card className={styles.salaries}>
        <HHSalary title='Начальный' salary={juniorSalary} rating={1} />
        <HHSalary title='Средний' salary={middleSalary} rating={2} />
        <HHSalary title='Профессионал' salary={seniorSalary} rating={3} />
      </Card>
    </div>
  </div>
)

export { HHData }
