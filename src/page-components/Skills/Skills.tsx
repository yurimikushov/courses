import { Heading, Label } from '../../components'
import { SkillsProps } from './Skills.props'
import styles from './Skills.module.css'

const Skills = ({ skills, className, ...props }: SkillsProps): JSX.Element => (
  <div className={className} {...props}>
    <Heading tag='h2'>Получаемые навыки</Heading>
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <li key={skill}>
          <Label color='primary'>{skill}</Label>
        </li>
      ))}
    </ul>
  </div>
)

export { Skills }
