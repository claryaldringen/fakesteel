import { shipping } from '../data/shipping'
import { countries } from '../data/countries'
import { orderOptions } from '../data/data'

export const labelToId = (label) => label.toLowerCase().replace(' ', '_')

export const idToLabel = (id) => {
  const parts = id.split('-')
  if (parts[0] == 'id') {
    id = parts[2]
  }
  const string = id.replace('_', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const isConditionTrue = (component, weaponParams) => {
  if (component && !component.condition) return true

  const condId = labelToId(component.condition.label)

  return (
    weaponParams[condId] &&
    component.condition.values.includes(weaponParams[condId])
  )
}

export const calculateShipping = (countryName, weight) => {
  const country = countries.find(({ name }) => name === countryName)
  const pricesPerKilograms =
    country && shipping[country.code] ? shipping[country.code] : shipping.WORLD
  const kilograms = Object.keys(pricesPerKilograms)
  const max = kilograms[kilograms.length - 1]
  const restOfWeight = (weight * 1.1) % max
  const shippingPrice = kilograms.reduce((price, kgs) => {
    if (restOfWeight < kgs && !price) {
      price = pricesPerKilograms[kgs]
    }
    return price
  }, 0)
  if (weight > max) {
    return shippingPrice + Math.floor(weight / max) * pricesPerKilograms[max]
  }
  return shippingPrice
}

export const calculatePrice = (params, weaponId, count = 1) => {
  const weapon = orderOptions.find(({ id }) => id == weaponId)
  let total = weapon.price * 1
  const components = weapon.components
  Object.keys(params).forEach((id) => {
    const component = components.find(
      (component) =>
        isConditionTrue(component, params) && component.label == idToLabel(id)
    )
    const { price } = component.options.find(({ value }) => value == params[id])
    total += price
  })
  return total * count
}

export const calculateWeight = (params, weaponId, count = 1) => {
  const weapon = orderOptions.find(({ id }) => id == weaponId)
  let total = weapon.weight * 1
  const components = weapon.components
  Object.keys(params).forEach((id) => {
    const component = components.find(
      (component) =>
        isConditionTrue(component, params) && component.label == idToLabel(id)
    )
    const { weight = 0 } = component.options.find(
      ({ value }) => value == params[id]
    )
    total += weight
  })
  return total * count
}
