import cn from 'classnames'
import { Label, Rating, Heading } from '../../../../components'
import { splitToThousands } from '../../../../utils'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'

const Header = ({
  image,
  title,
  categories,
  price,
  credit,
  initialRating,
  reviewCount,
  className,
}: HeaderProps): JSX.Element => (
  <div className={cn(className, styles.header)}>
    <div className={styles.logo}>
      <img
        src={process.env.NEXT_PUBLIC_API + image}
        alt='Picture of the author'
      />
    </div>
    <Heading className={styles.title} tag='h3'>
      {title}
    </Heading>
    <div className={styles.categories}>
      {categories.map((category) => (
        <Label key={category} className={styles.category}>
          {category}
        </Label>
      ))}
    </div>
    <div className={styles.priceValue}>{`${splitToThousands(price)} ₽`}</div>
    <div className={styles.priceTitle}>цена</div>
    <div className={styles.creditValue}>{`${splitToThousands(credit)} ₽`}</div>
    <div className={styles.creditTitle}>в кредит</div>
    <Rating className={styles.ratingValue} rating={initialRating} />
    <div className={styles.ratingTitle}>{reviewCount} отзывов</div>
  </div>
)

export { Header }
