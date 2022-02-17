import React, { useState } from 'react'

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

const Index = () => {
  const [active, setActive] = useState()

  return (
    <div className={styles.container}>
      <WebHead />
      <Header active={active} setActive={setActive} />
      <main>
        <Main active={active} setActive={setActive} />
        {categories.map(({ id, items, description }) => (
          <Category
            key={`cat_${id}`}
            id={id}
            items={items}
            description={description}
            active={active}
            setActive={setActive}
          />
        ))}
        <Order active={active} setActive={setActive} />
        <About active={active} setActive={setActive} />
      </main>

      <footer>
        <Footer />
      </footer>
      <Chat />
      <StyledCookieConsent />
    </div>
  )
}

export default Index
