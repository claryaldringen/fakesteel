import { useState, useMemo, useCallback } from 'react'

import { orderOptions } from '../../data/data'
import { idToLabel, labelToId } from '../../utils'
import styles from './OrderForm.module.scss'

const getPrice = (params, weaponId, count = 1) => {
  const weapon = orderOptions.find(({ id }) => id == weaponId)
  let total = weapon.price * 1
  const components = weapon.components
  Object.keys(params).forEach((id) => {
    const component = components.find(({ label }) => label == idToLabel(id))
    const { price } = component.options.find(({ value }) => value == params[id])
    total += price
  })
  return total * count
}

const prepareInitialState = (weaponId) =>
  orderOptions
    .find(({ id }) => id == weaponId)
    .components.reduce(
      (acc, { label, options }) => ({
        [labelToId(label)]: options[0].value,
        ...acc,
      }),
      {}
    )

const renderFormElement = (
  { type, label, ...params },
  weaponParams,
  onChange
) => {
  const onSelectChange = (event) =>
    onChange(labelToId(label), event.target.value)

  switch (type) {
    case 'select':
      const id = labelToId(label)
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

  const price = useMemo(() => getPrice(weaponParams, weapon, count), [
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
      setWeaponParams(newState)
    },
    [setWeaponParams, weaponParams]
  )

  const addToOrder = useCallback(() => {
    setBasket([{ count, weapon, price, ...weaponParams }, ...basket])
    setWeapon(defaultWeaponId)
    setWeaponParams(prepareInitialState(defaultWeaponId))
    setCount(1)
  }, [
    count,
    setCount,
    defaultWeaponId,
    weaponParams,
    basket,
    weapon,
    setBasket,
    setWeapon,
    setWeaponParams,
  ])

  const components = useMemo(
    () => orderOptions.find(({ id }) => id == weapon).components,
    [orderOptions, weapon]
  )

  const onCountChange = useCallback(
    (event) => setCount(event.target.value * 1),
    [setCount]
  )

  return (
    <div className={styles.form}>
      <h2>Weapon selection</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label id="wt">Weapon type:</label>
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
          {components.map((component) => (
            <tr>
              <td>
                <label for={labelToId(component.label)}>
                  {component.label}:&nbsp;
                </label>
              </td>
              <td>{renderFormElement(component, weaponParams, onChange)}</td>
            </tr>
          ))}
          <tr>
            <td>
              <label for="count">Count:</label>
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
            <td>{price} Kč</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={addToOrder}>Add to order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
