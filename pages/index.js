import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Category } from '../components/Category/Category'
import { About } from '../components/About/About'
import { categories } from '../data/data'
import { Footer } from '../components/Footer/Footer'
import { OrderForm } from '../components/OrderForm/OrderForm'

export default () => {
  const [active, setActive] = useState()

  return (
    <div className={styles.container}>
      <Head>
        <title>FakeSteel armory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header active={active} setActive={setActive} />
      <main>
        <Main active={active} setActive={setActive} />
        {categories.map(({ id, items, description }) => (
          <Category
            key={`cat_${id}`}
            id={id}
            items={items}
            description={description}
            setActive={setActive}
            active={active}
          />
        ))}
        <OrderForm active={active} setActive={setActive} />
        <About active={active} setActive={setActive} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
