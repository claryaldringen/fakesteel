import Head from 'next/head'
import slugify from 'slugify'

import styles from '../../styles/Home.module.css'
import { Header } from '../../components/Header/Header'
import { categories } from '../../data/data'
import { Detail } from '../../components/Detail/Detail'

export default ({ item, category }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeSteel armory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active={category.id} setActive={() => null} />
      <main>
        <Detail {...item} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

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
