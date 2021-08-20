import React, { useMemo, useState } from 'react'
import styles from './OrderForm.module.scss'

import { useScrollListener } from '../../hooks/useScrollListener'
import { OrderForm } from './OrderForm'
import { Basket } from './Basket'
import { RecapitulationForm } from './RecapitulationForm'

export const Order = ({ active, setActive }) => {
  const [basket, setBasket] = useState([])

  const total = useMemo(
    () => basket.reduce((total, { price }) => total + price, 0),
    [basket]
  )

  useScrollListener('order', active, setActive)

  return (
    <div className={styles.order} id="order">
      <OrderForm basket={basket} setBasket={setBasket} />
      <Basket basket={basket} total={total} />
      <div className={styles.clear} />
      <RecapitulationForm
        basket={basket}
        setBasket={setBasket}
        itemsPrice={total}
      />
      <div className={styles.clear} />
    </div>
  )
}
