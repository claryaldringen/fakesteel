export const labelToId = (label) => label.toLowerCase().replace(' ', '_')

export const idToLabel = (id) => {
  const string = id.replace('_', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1)
}
