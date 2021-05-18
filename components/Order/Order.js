import { useState, useMemo, useCallback } from 'react'
import styles from './OrderForm.module.scss'

import { orderOptions } from '../../data/data'
import { useScrollListener } from '../../hooks/useScrollListener'
import { OrderForm } from './OrderForm'

export const Order = ({ active, setActive }) => {
  const [basket, setBasket] = useState([])

  useScrollListener('order', active, setActive)

  return (
    <div className={styles.form} id="order">
      <div className={styles.col}>
        <OrderForm />
      </div>
      <div className={styles.col}>
        <h2>Your basket</h2>
      </div>
    </div>
  )
}
