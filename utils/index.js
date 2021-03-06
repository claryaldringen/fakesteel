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

  let conditions
  if (Array.isArray(component.condition)) {
    conditions = component.condition
  } else {
    conditions = [component.condition]
  }

  for (let i = 0; i < conditions.length; i++) {
    const condition = conditions[i]
    const condId = labelToId(condition.label)
    if (
      !weaponParams[condId] ||
      !condition.values.includes(weaponParams[condId])
    ) {
      return false
    }
  }

  return true
}

export const calculateShipping = (countryName, weight, additionalPrice) => {
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
  return shippingPrice + additionalPrice
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
    const option = component?.options.find(({ value }) => value == params[id])
    total += option?.price ?? 0
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
    const option = component?.options.find(({ value }) => value == params[id])
    console.log(option)
    total += option?.weight ?? 0
  })
  return total * count
}

export const calculateValues = (weaponId, selectedValues = {}) => {
  const selectedWeapon = orderOptions.find(({ id }) => id == weaponId)
  return selectedWeapon.components.reduce((acc, component) => {
    const componentId = labelToId(component.label)
    if (isConditionTrue(component, acc)) {
      acc[componentId] = selectedValues[componentId]
        ? selectedValues[componentId]
        : component.options[0].value
    }
    return acc
  }, {})
}

export const calculatePayment = (total, payment, country) => {
  if (payment === 'transfer') {
    return country === 'Czech Republic' ? 0 : 100
  }
  return Math.ceil(total * 0.05)
}

export const getSpearsShipping = (basket) => {
  const spear = basket.find(
    (item) => item.length && item.length === 'with 2m shaft'
  )
  let additionalPrice = 0
  if (spear?.count) {
    additionalPrice = 60 + (spear.count - 1) * 20
  }
  return additionalPrice
}
