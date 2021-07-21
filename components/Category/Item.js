import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import slugify from 'slugify'
import classNames from 'classnames'
import styles from './Category.module.scss'

export const Item = ({ images, title, description, categoryId }) => {
  const image = useMemo(() => images[0], [images])
  const href = useMemo(() => slugify(title), [title])

  return (
    <Link href={href} key={`item_${image}`}>
      <div
        className={classNames(styles.category, {
          [styles.maxHeight]: image.fill,
        })}
      >
        <Image
          src={`/images/weapons/${image.src}.jpg`}
          width={image.width}
          height={image.height}
        />
        <div className={styles.description}>
          <div className={styles.icon}>
            <Image
              src={`/images/menu/${categoryId}-b.png`}
              width={48}
              height={90}
            />
          </div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  )
}
