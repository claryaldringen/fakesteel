import React from 'react'
import slugify from 'slugify'

import styles from '../../styles/Home.module.css'
import { Header } from '../../components/Header/Header'
import { categories } from '../../data/data'
import { Detail } from '../../components/Detail/Detail'
import { StyledCookieConsent } from '../../components/CookieConsent/StyledCookieConsent'
import { WebHead } from '../../components/Head'

const DetailPage = ({ item, category }) => (
  <div className={styles.container}>
    <WebHead />
    <Header active={category.id} setActive={() => null} />
    <main>
      <Detail {...item} />
    </main>

    <footer className={styles.footer}></footer>
    <StyledCookieConsent />
  </div>
)

export const getServerSideProps = async ({ params }) => {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i]
    const item = category.items.find(
      ({ title }) => slugify(title) == params.weapon
    )
    if (item) {
      return {
        props: {
          item,
          category,
        },
      }
    }
  }
}

export default DetailPage
