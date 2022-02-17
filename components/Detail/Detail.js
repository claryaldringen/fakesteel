import React, { useMemo } from 'react'
import Image from 'next/image'
import styles from './Detail.module.scss'
import classNames from 'classnames'

export const Detail = ({
  images,
  title,
  longDescription,
  price,
  additionalPrice,
}) => {
  const slicedImages = useMemo(() => images.slice(1), [images])

  return (
    <div className={styles.detail}>
      {slicedImages.map(({ src, width, height, fill }, index) => (
        <div
          key={`di_${index}`}
          className={classNames(
            styles.image,
            fill ? styles.tall : styles.short
          )}
        >
          <Image
            src={`/images/weapons/${src}.jpg`}
            width={width}
            height={height}
          />
        </div>
      ))}
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>
          <div dangerouslySetInnerHTML={{ __html: longDescription }} />
        </p>
        <table className={styles.price}>
          <tbody>
            {(Array.isArray(price) ? price : [price]).map((p, index) => (
              <tr key={`price_${index}`}>
                <td>{!index && 'Price: '}</td>
                <td>
                  {p} CZK
                  {additionalPrice
                    ? Array.isArray(additionalPrice)
                      ? additionalPrice[index]
                      : additionalPrice
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          For orders and other questions, do not hesitate to contact us on our{' '}
          <a
            href="https://www.facebook.com/fakesteel"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook
          </a>{' '}
          or use our email{' '}
          <a href="mailto:info@fakesteel.cz">info@fakesteel.cz</a>, or use our{' '}
          <a href="/#order">order form</a>!
        </div>
      </div>
    </div>
  )
}
