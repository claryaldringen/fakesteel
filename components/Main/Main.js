import styles from './Main.module.scss'

import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const images = [
  'balisard_detail_1',
  'viking_detail',
  'balisard_detail_kombo',
  'savle_detail',
  'bastard_detail',
]

export const Main = () => {
  return (
    <div className={styles.main}>
      <Fade arrows={false}>
        {images.map((image, i) => (
          <div key={`image_${i}`}>
            <img src={`/images/main/${image}.jpg`} className={styles.image} />
          </div>
        ))}
      </Fade>
    </div>
  )
}
