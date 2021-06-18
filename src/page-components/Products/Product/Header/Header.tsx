import cn from 'classnames'
import { Label, Rating } from '../../../../components'
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
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Label key={category}>{category}</Label>
        ))}
      </div>
    </div>
    <div className={styles.price}>
      <div>{price}</div>
      <div>цена</div>
    </div>
    <div className={styles.credit}>
      <div>{credit}</div>
      <div>в кредит</div>
    </div>
    <div className={styles.rating}>
      <Rating rating={initialRating} />
      <div>{reviewCount} отзывов</div>
    </div>
  </div>
)

export { Header }
