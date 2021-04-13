import { useState, useMemo, useCallback } from 'react'
import styles from './OrderForm.module.scss'

import { categories } from '../../data/data'
import { useScrollListener } from '../../hooks/useScrollListener'

const items = categories.reduce(
  (items, category) => [...items, ...category.items],
  []
)

export const OrderForm = ({ active, setActive }) => {
  const [state, setState] = useState(new Array(items.length).fill(0))

  useScrollListener('about', active, setActive)

  const onChange = useCallback(
    (index, value) => {
      const copy = [...state]
      copy[index] = value
      setState(copy)
    },
    [state, setState]
  )

  console.log(state)

  return (
    <div className={styles.form} id="order">
      <div className={styles.col}>
        {items.map(({ title, price }, i) => (
          <div className={styles.row} key={`order_row_${i}`}>
            <div className={styles.count}>
              <input
                type="number"
                min={0}
                size={2}
                value={state[i]}
                onChange={(event) => onChange(i, event.target.value * 1)}
              />
              x
            </div>
            <div className={styles.item}>
              {title.replace(' ', '\u00a0')}&nbsp;({price}&nbsp;Kč/ks)
            </div>
            <div className={styles.price}>{state[i] * price} Kč</div>
          </div>
        ))}
        Celkem:{' '}
        {state.reduce((accu, curr, i) => accu + curr * items[i].price, 0)} Kč
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <label htmlFor="delivery">Doručení:</label>
          <select id="delivery">
            <option value="">DPD</option>
            <option value="">Osobní odběr</option>
          </select>
        </div>
        <div className={styles.row}>
          <label htmlFor="name">Jméno a Příjmení:</label>
          <input id="name" type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.row}>
          <label htmlFor="street">Ulice a čp.:</label>
          <input id="street" type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="city">Město a PSČ:</label>
          <input id="city" type="text" />
        </div>
      </div>
      <div className={styles.col}>
        <label htmlFor="notice">Poznámka:</label>
        <br />
        <textarea id="notice" />
      </div>
    </div>
  )
}
