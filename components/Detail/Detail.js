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
        <p>
          <div dangerouslySetInnerHTML={{ __html: longDescription }} />
        </p>
        <span className={styles.price}>Price: {price} CZK</span>
        <div>
          For orders and other questions, do not hesitate to contact us on our{' '}
          <a href="https://www.facebook.com/fakesteel" target="_blank">
            Facebook
          </a>{' '}
          or use our <a href="/#order">order form</a>!
        </div>
      </div>
    </div>
  )
}
