import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image src="/images/logo.png" width={600} height={650} />
      </Link>
    </div>
  )
}
