import cn from 'classnames'
import { useScrollY } from '../../hooks'
import UpIcon from './assets/up.svg'
import styles from './Up.module.css'

const Up = (): JSX.Element => {
  const scrollY = useScrollY()

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={cn(styles.up, {
        [styles.displayed]: scrollY > innerHeight / 2,
      })}
      onClick={scrollToTop}
    >
      <UpIcon />
    </div>
  )
}

export { Up }
