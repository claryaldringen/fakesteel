import Image from 'next/image'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <a href="mailto:info@fakesteel.com">info@fakesteel.com</a>
        <br />
        +420 722 954 861
      </div>
      <div className={styles.social}>
        <div className={styles.icon}>
          <a href="https://www.facebook.com/fakesteel" target="_blank">
            <Image src="/images/facebook.png" width={340} height={340} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/fakesteelarmory/" target="_blank">
            <Image src="/images/instagram.png" width={1901} height={1901} />
          </a>
        </div>
      </div>
    </div>
  )
}
