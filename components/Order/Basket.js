import React from 'react'
import { idToLabel } from '../../utils'
import styles from './OrderForm.module.scss'

/* eslint-disable */
export const Basket = ({ basket, total, removeFromBasket }) => (
  <div className={styles.basket}>
    <h2>Your basket {total > 0 && `(total: ${total} CZK)`}</h2>
    {basket.map(({ count, weapon, price, weight, ...props }, i) => (
      <div className={styles.item} key={`table_${i}`}>
        <div className={styles.closeIcon} onClick={() => removeFromBasket(i)}>X</div>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                <h4>
                  {count}x {idToLabel(weapon)}
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props)
              .reverse()
              .map((key, j) => (
                <tr key={`row_${i}_${j}`} className={styles.small}>
                  <td>
                    <b>{idToLabel(key)}:</b>
                  </td>
                  <td>{props[key]}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr className={styles.small}>
              <td>
                <b>Price:</b>
              </td>
              <td>
                <b>{price} CZK</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    ))}
  </div>
)
