import React from 'react'
import styles from './Main.module.scss'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { useScrollListener } from '../../hooks/useScrollListener'

const images = [
  19,
  1,
  17,
  2,
  18,
  3,
  7,
  4,
  5,
  6,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
]

export const Main = ({ active, setActive }) => {
  useScrollListener('main', active, setActive)

  return (
    <div id="main" className={styles.main}>
      <Slide
        easing="ease"
        arrows={true}
        duration={3000}
        transitionDuration={2000}
      >
        {images.map((image, i) => (
          <div key={`image_${i}`}>
            <img
              src={`/images/main/${image}.jpg`}
              className={styles.image}
              alt=""
            />
          </div>
        ))}
      </Slide>
    </div>
  )
}
