import { motion } from 'framer-motion'
import { useScrollY } from '../../hooks'
import { isBrowser } from '../../utils'
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

  const animationVariants = {
    visible: {
      display: 'flex',
      opacity: 1,
    },
    hidden: {
      transitionEnd: {
        display: 'none',
      },
      opacity: 0,
    },
  }

  const needToShow = scrollY > (isBrowser() && window.innerHeight) || 0

  return (
    <motion.div
      className={styles.up}
      onClick={scrollToTop}
      variants={animationVariants}
      initial={needToShow ? 'visible' : 'hidden'}
      animate={needToShow ? 'visible' : 'hidden'}
    >
      <UpIcon />
    </motion.div>
  )
}

export { Up }
