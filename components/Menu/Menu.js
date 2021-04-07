import Image from 'next/image'
import styles from './Menu.module.scss'

const categories = [
  { img: 'spears', label: 'Spears' },
  { img: 'maces', label: 'Maces' },
  { img: 'messers', label: 'Messers' },
  { img: 'swords', label: 'Swords' },
  { img: 'about', label: 'About us' },
  { img: 'coming', label: 'Coming soon' },
]

export const Menu = ({ active, setActive }) => {
  return (
    <div>
      <ul className={styles.menu}>
        {categories.map(({ img, label }) => (
          <li key={img}>
            <a
              className={`${styles.item} ${active == img ? styles.active : ''}`}
              href={`#${img}`}
              onClick={() => setActive(img)}
            >
              <div className={styles.icon}>
                <Image src={`/images/${img}.jpg`} width={350} height={630} />
              </div>
              <span className={styles.title}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
