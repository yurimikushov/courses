import cn from 'classnames'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'

const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
  <footer className={cn(className, styles.footer)} {...props}>
    <span>
      Курсы здесь © 2020 - {new Date().getFullYear()} Все права защищены
    </span>
    <a href='#' target='_blank'>
      Пользовательское соглашение
    </a>
    <a href='#' target='_blank'>
      Политика конфиденциальности
    </a>
  </footer>
)

export { Footer }
