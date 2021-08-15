import React, { useState } from 'react'
import styles from './OrderForm.module.scss'

import { useScrollListener } from '../../hooks/useScrollListener'
import { OrderForm } from './OrderForm'
import { Basket } from './Basket'
import { RecapitulationForm } from './RecapitulationForm'

export const Order = ({ active, setActive }) => {
  const [basket, setBasket] = useState([])

  useScrollListener('order', active, setActive)

  return (
    <div className={styles.order} id="order">
      <OrderForm basket={basket} setBasket={setBasket} />
      <Basket basket={basket} />
      <div className={styles.clear} />
      <RecapitulationForm basket={basket} setBasket={setBasket} />
      <div className={styles.clear} />
    </div>
  )
}
