import { useState, useMemo, useCallback } from 'react'
import styles from './OrderForm.module.scss'

import { orderOptions } from '../../data/data'

const labelToId = (label) => label.toLowerCase().replace(' ', '_')

const idToLabel = (id) => {
  const string = id.replace('_', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1)
}

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
      return (
        <select
          onChange={onSelectChange}
          value={weaponParams[labelToId(label)]}
        >
          {params.options.map(({ title, value }) => (
            <option key={`${label}–${value}`} value={value}>
              {title}
            </option>
          ))}
        </select>
      )
  }
}

export const OrderForm = ({ active, setActive }) => {
  const defaultWeaponId = orderOptions[0].id
  const [weapon, setWeapon] = useState(defaultWeaponId)
  const [weaponParams, setWeaponParams] = useState(prepareInitialState(weapon))
  const [count, setCount] = useState(1)
  const [basket, setBasket] = useState([])

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
  }, [
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
    <div>
      <h2>Weapon selection</h2>
      <select onChange={onWeaponChange}>
        {orderOptions.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>
      {components.map((component) => (
        <>
          <label>{component.label}</label>
          {renderFormElement(component, weaponParams, onChange)}
        </>
      ))}
      <input
        type="number"
        step={1}
        min={1}
        onChange={onCountChange}
        value={count}
      />
      Item price: {price}
      <button onClick={addToOrder}>Add to order</button>
    </div>
  )
}
