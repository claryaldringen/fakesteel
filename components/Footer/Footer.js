import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        FakeSteel Armory s.r.o.
        <br />
        Milánská 460
        <br />
        10900 Praha 10
        <br />
        Czech Republic
        <br />
        <br />
        IČ: 03386007
        <br />
        <br />
        <a href="mailto:info@fakesteel.com">info@fakesteel.com</a>
        <br />
        +420 733 580 425
      </div>
      <div className={styles.social}>
        <div className={styles.icon}>
          <a
            href="https://www.facebook.com/fakesteel"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/images/facebook.png" width={340} height={340} />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.instagram.com/fakesteelarmory/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src="/images/instagram.png" width={1901} height={1901} />
          </a>
        </div>
      </div>
    </div>
  )
}
