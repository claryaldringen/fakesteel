import React from 'react'

import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Category } from '../components/Category/Category'
import { About } from '../components/About/About'
import { categories } from '../data/data'
import { Footer } from '../components/Footer/Footer'
import { StyledCookieConsent } from '../components/CookieConsent/StyledCookieConsent'
import { WebHead } from '../components/Head'
import { Chat } from '../components/Chat/Chat'
import { Order } from '../components/Order/Order'

const Index = () => (
  <div className={styles.container}>
    <WebHead />
    <Header />
    <main>
      <Main />
      {categories.map(({ id, items, description }) => (
        <Category
          key={`cat_${id}`}
          id={id}
          items={items}
          description={description}
        />
      ))}
      <Order />
      <About />
    </main>

    <footer>
      <Footer />
    </footer>
    <Chat />
    <StyledCookieConsent />
  </div>
)

export default Index
