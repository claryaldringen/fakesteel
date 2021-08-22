import React from 'react'
import Image from 'next/image'
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <Image src="/images/logo.png" width={600} height={650} />
      </a>
    </div>
  )
}
