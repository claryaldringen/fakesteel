import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './OrderForm.module.scss'

import { useScrollListener } from '../../hooks/useScrollListener'
import { OrderForm } from './OrderForm'
import { Basket } from './Basket'
import { RecapitulationForm } from './RecapitulationForm'

export const Order = () => {
  const [basket, setBasket] = useState([])

  const total = useMemo(
    () => basket.reduce((total, { price }) => total + price, 0),
    [basket]
  )

  const removeFromBasket = useCallback(
    (index) => {
      if (
        confirm(
          `Are you sure you want to remove the ${basket[index].weapon} from the order?`
        )
      ) {
        basket.splice(index, 1)
        setBasket([...basket])
      }
    },
    [basket, setBasket]
  )

  useEffect(() => {
    const beforeUnloadListener = (event) => {
      if (basket.length) {
        event.preventDefault()
        event.returnValue = ''
      }
    }
    window.addEventListener('beforeunload', beforeUnloadListener, {
      capture: true,
    })

    return () =>
      window.removeEventListener('beforeunload', beforeUnloadListener, {
        capture: true,
      })
  }, [basket])

  useScrollListener('order')

  return (
    <div className={styles.order} id="order">
      <OrderForm basket={basket} setBasket={setBasket} />
      <Basket
        basket={basket}
        total={total}
        removeFromBasket={removeFromBasket}
      />
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
