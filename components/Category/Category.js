import Image from 'next/image'
import styles from './Category.module.scss'
import {useScrollListener} from "../../hooks/useScrollListener";

export const Category = ({ id, items, active, setActive }) => {

  useScrollListener(id, active, setActive)

  return (
    <div id={id}>
      {items.map(({ image, description: itemDescription }) => (
        <div className={styles.category} key={`item_${image}`}>
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
    </div>
  )
}
