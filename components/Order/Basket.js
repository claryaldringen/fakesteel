import { idToLabel } from '../../utils'
import { useMemo } from 'react'
import styles from './OrderForm.module.scss'

export const Basket = ({ basket }) => {
  const total = useMemo(
    () => basket.reduce((total, { price }) => total + price, 0),
    [basket]
  )

  return (
    <div className={styles.basket}>
        <h2>Your basket {total > 0 && `(total: ${total} CZK)`}</h2>
      {basket.map(({ count, weapon, price, ...props }, i) => (
        <table key={`table_${i}`} className={styles.item}>
          <thead>
            <th colSpan={2}>
                <h4>{count}x {idToLabel(weapon)}</h4>
            </th>
          </thead>
          <tbody>
            {Object.keys(props).map((key, j) => (
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
      ))}
    </div>
  )
}
