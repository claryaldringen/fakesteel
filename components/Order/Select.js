import React, { useMemo, useCallback } from 'react'
import { labelToId } from '../../utils'

export const Select = ({ label, options, onChange, weaponParams }) => {
  const id = useMemo(() => labelToId(label), [label])

  const onSelectChange = useCallback(
    (event) => {
      onChange(id, event.target.value)
    },
    [id, onChange]
  )

  return (
    <select id={id} onChange={onSelectChange} value={weaponParams[id]}>
      {options.map(({ title, value }) => (
        <option key={`${label}–${value}`} value={value}>
          {title}
        </option>
      ))}
    </select>
  )
}
