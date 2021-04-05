import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Category } from '../components/Category/Category'

const categories = [
  {
    id: 'messers',
    description:
      'K dýkám je možné si objednat koženou pochvu s ocelovým nákončím. Barva kůže bordó, černá, hnědá. Cena 800-850 Kč dle délky čepele.',
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
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeSteel armory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Main />
        {categories.map(({ id, items, description }) => (
          <Category id={id} items={items} description={description} />
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
