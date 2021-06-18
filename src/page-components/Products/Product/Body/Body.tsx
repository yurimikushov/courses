import cn from 'classnames'
import { Label } from '../../../../components'
import { BodyProps } from './Body.props'
import styles from './Body.module.css'

const Body = ({
  description,
  characteristics,
  tags,
  advantages,
  disadvantages,
  className,
}: BodyProps): JSX.Element => (
  <div className={cn(className, styles.body)}>
    <div className={styles.description}>{description}</div>
    <div>
      <div className={styles.characteristics}>
        {characteristics.map(({ name, value }) => (
          <div key={name} className={styles.characteristic}>
            <span className={styles.characteristicName}>{name}</span>
            <span className={styles.dots}></span>
            <span className={styles.characteristicValue}>{value}</span>
          </div>
        ))}
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Label key={tag}>{tag}</Label>
        ))}
      </div>
    </div>
    <div className={styles.adv}>
      {advantages && (
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{advantages}</div>
        </div>
      )}
      {disadvantages && (
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{disadvantages}</div>
        </div>
      )}
    </div>
  </div>
)

export { Body }
