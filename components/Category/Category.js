import Image from 'next/image'
import styles from './Category.module.scss'

export const Category = ({ id, items, description }) => {
  return (
    <div id={id}>
      {items.map(({ title: itemTitle, image, description: itemDescription }) => (
        <div className={styles.category}>
          <Image
            src={`/images/weapons/${image.src}.jpg`}
            width={image.width}
            height={image.height}
          />
          <div className={styles.description}>
              {itemDescription}
          </div>
        </div>
      ))}
      <div>{description}</div>
    </div>
  )
}
