import Image from 'next/image'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <div>
      <ul>
        {['spears', 'maces', 'messers', 'swords', 'about', 'coming'].map(
          (img) => (
            <li className={styles.item} key={img}>
              <a href={`#${img}`}>
                <Image src={`/images/${img}.jpg`} width={350} height={630} />
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
