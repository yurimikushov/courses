import UpIcon from './assets/up.svg'
import styles from './Up.module.css'

const Up = (): JSX.Element => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.up} onClick={scrollToTop}>
      <UpIcon />
    </div>
  )
}

export { Up }
