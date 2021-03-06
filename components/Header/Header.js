import React from 'react'
import { Logo } from '../Logo/Logo'
import { Menu } from '../Menu/Menu'
import styles from './Header.module.scss'

export const Header = ({ active, setActive }) => (
  <header className={styles.header}>
    <div className={styles.menu}>
      <Menu active={active} setActive={setActive} />
    </div>
    <div className={styles.logo}>
      <Logo />
    </div>
  </header>
)
