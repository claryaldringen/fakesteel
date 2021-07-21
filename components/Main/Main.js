import styles from './Main.module.scss'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { useScrollListener } from '../../hooks/useScrollListener'

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export const Main = ({ active, setActive }) => {
  useScrollListener('main', active, setActive)

  return (
    <div id="main" className={styles.main}>
      <Slide easing="ease" arrows={true} duration={4000} transitionDuration={2000}>
        {images.map((image, i) => (
          <div key={`image_${i}`}>
            <img src={`/images/main/${image}.jpg`} className={styles.image} />
          </div>
        ))}
      </Slide>
    </div>
  )
}
