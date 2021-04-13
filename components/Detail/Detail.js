import { useMemo } from 'react'
import Image from 'next/image'
import styles from './Detail.module.scss'

export const Detail = ({ images, title, longDescription, price }) => {
  const slicedImages = useMemo(() => images.slice(1), [images])

  return (
    <div className={styles.detail}>
      {slicedImages.map(({ src, width, height }) => (
        <Image
          src={`/images/weapons/${src}.jpg`}
          width={width}
          height={height}
        />
      ))}
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{longDescription}</p>
        <span className={styles.price}>{price} Kč</span>
      </div>
    </div>
  )
}
