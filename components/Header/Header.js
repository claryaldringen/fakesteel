import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </header>
  )
}
