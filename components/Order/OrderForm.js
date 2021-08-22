import React, { useState, useMemo, useCallback, Fragment } from 'react'

import { orderOptions } from '../../data/data'
import {
  calculatePrice,
  calculateWeight,
  isConditionTrue,
  labelToId,
} from '../../utils'
import styles from './OrderForm.module.scss'

const prepareInitialState = (weaponId, state = {}) =>
  orderOptions
    .find(({ id }) => id == weaponId)
    .components.reduce((acc, { label, options, condition }) => {
      if (isConditionTrue({ condition }, state)) {
        const componentId = labelToId(label)
        if (acc[componentId]) return acc
        return {
          [componentId]: options[0].value,
          ...acc,
        }
      }
      return acc
    }, state)

const renderFormElement = (
  { type, label, ...params },
  weaponParams,
  onChange
) => {
  const onSelectChange = (event) =>
    onChange(labelToId(label), event.target.value)

  const id = labelToId(label)

  switch (type) {
    case 'select':
      return (
        <select id={id} onChange={onSelectChange} value={weaponParams[id]}>
          {params.options.map(({ title, value }) => (
            <option key={`${label}–${value}`} value={value}>
              {title}
            </option>
          ))}
        </select>
      )
  }
}

export const OrderForm = ({ basket, setBasket }) => {
  const defaultWeaponId = orderOptions[0].id
  const [weapon, setWeapon] = useState(defaultWeaponId)
  const [weaponParams, setWeaponParams] = useState(prepareInitialState(weapon))
  const [count, setCount] = useState(1)

  const price = useMemo(() => calculatePrice(weaponParams, weapon, count), [
    weaponParams,
    weapon,
    count,
  ])

  const onWeaponChange = useCallback(
    (event) => {
      setWeapon(event.target.value)
      setWeaponParams(prepareInitialState(event.target.value))
    },
    [setWeapon]
  )

  const onChange = useCallback(
    (item, value) => {
      const newState = { ...weaponParams }
      newState[item] = value
      setWeaponParams(prepareInitialState(weapon, newState))
    },
    [setWeaponParams, weaponParams]
  )

  const addToOrder = useCallback(
    (e) => {
      e.stopPropagation()
      e.preventDefault()
      const index = basket.findIndex((item) =>
        Object.keys(weaponParams).reduce(
          (acc, param) => acc && item[param] === weaponParams[param],
          true
        )
      )
      if (index > -1) {
        const oldCount = basket[index].count
        basket.splice(index, 1)

        setBasket([
          {
            count: count + oldCount,
            weapon,
            price,
            weight: calculateWeight(weaponParams, weapon, count + oldCount),
            ...weaponParams,
          },
          ...basket,
        ])
      } else {
        setBasket([
          {
            count,
            weapon,
            price,
            weight: calculateWeight(weaponParams, weapon, count),
            ...weaponParams,
          },
          ...basket,
        ])
      }
      setWeapon(defaultWeaponId)
      setWeaponParams(prepareInitialState(defaultWeaponId))
      setCount(1)
    },
    [
      count,
      setCount,
      defaultWeaponId,
      weaponParams,
      basket,
      weapon,
      setBasket,
      setWeapon,
      setWeaponParams,
    ]
  )

  const components = useMemo(
    () => orderOptions.find(({ id }) => id == weapon).components,
    [orderOptions, weapon]
  )

  const onCountChange = useCallback(
    (event) => setCount(event.target.value * 1),
    [setCount]
  )

  return (
    <div className={styles.orderForm}>
      <h2>Weapon selection</h2>
      <form className={styles.form}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="wt">Weapon type:</label>
              </td>
              <td>
                <select id="wt" onChange={onWeaponChange} value={weapon}>
                  {orderOptions.map(({ id, title }) => (
                    <option key={id} value={id}>
                      {title}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {components.map((component, i) => (
              <Fragment key={`c_${i}`}>
                {isConditionTrue(component, weaponParams) && (
                  <tr key={labelToId(component.label)}>
                    <td>
                      <label htmlFor={labelToId(component.label)}>
                        {component.label}:&nbsp;
                      </label>
                    </td>
                    <td>
                      {renderFormElement(component, weaponParams, onChange)}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
            <tr>
              <td>
                <label htmlFor="count">Count:</label>
              </td>
              <td>
                {' '}
                <input
                  id="count"
                  type="number"
                  step={1}
                  min={1}
                  onChange={onCountChange}
                  value={count}
                />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>{price} CZK</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button onClick={addToOrder}>Add to order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}
