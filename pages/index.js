import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Category } from '../components/Category/Category'
import { About } from '../components/About/About'

const categories = [
  {
    id: 'messers',
    items: [
      {
        description: 'Falchion, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'Falchion_1', width: 5505, height: 3670 },
      },
      {
        description: 'Tesák, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'messer_1', width: 5606, height: 3737 },
      },
      {
        description: 'Šavle, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'savle_1', width: 5440, height: 3627 },
      },
    ],
  },
  {
    id: 'swords',
    items: [
      {
        description: 'Viking, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'viking', width: 5383, height: 3589 },
      },
      {
        description: 'Jednoručka úzká, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'mince_uzka', width: 5504, height: 3672 },
      },
      {
        description: 'Jednoručka široká, 70 cm, 1.2 kg, 1200 - 1500 Kč',
        image: { src: 'mince_siroka', width: 5384, height: 3584 },
      },
    ],
  },
]

export default function Home() {
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
        <About active={active} setActive={setActive} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
