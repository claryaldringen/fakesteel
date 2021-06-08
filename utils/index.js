export const labelToId = (label) => label.toLowerCase().replace(' ', '_')

export const idToLabel = (id) => {
  const parts = id.split('-')
  if(parts[0] == 'id') {
    id = parts[2]
  }
  const string = id.replace('_', ' ')
  return string.charAt(0).toUpperCase() + string.slice(1)
}
