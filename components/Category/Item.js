import { useMemo } from 'react'
import Link from 'next/link'
import styles from './Category.module.scss'
import Image from 'next/image'
import slugify from 'slugify'

export const Item = ({ images, title, description }) => {
  const image = useMemo(() => images[0], [images])
  const href = useMemo(() => slugify(title), [title])

  return (
    <Link href={href} key={`item_${image}`}>
      <div className={styles.category}>
        <Image
          src={`/images/weapons/${image.src}.jpg`}
          width={image.width}
          height={image.height}
        />
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  )
}
