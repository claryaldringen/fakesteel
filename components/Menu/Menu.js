import React from 'react'
import styles from './Menu.module.scss'
import { categories } from '../../data/data'

const menuItems = [
  ...categories,
  { id: '', label: '' },
  // { id: 'order', label: 'Order' },
  { id: 'about', label: 'FAQ' },
]

export const Menu = ({ active, setActive }) => {
  return (
    <div>
      <ul className={styles.menu}>
        {menuItems.map(({ id, label }) => (
          <li key={`menu_${id}`}>
            {id ? (
              <a
                className={`${styles.item} ${
                  active == id ? styles.active : ''
                }`}
                href={`/#${id}`}
                onClick={() => setActive(id)}
              >
                <div className={styles.ribbon}>
                  <span className={styles.title}>{label}</span>
                  <div className={styles.triangleTop} />
                  <div className={styles.triangleBottom} />
                </div>
                <div className={`${styles[id]} ${styles.icon}`} />
              </a>
            ) : (
              <div className={styles.empty}>
                <div className={styles.icon} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
