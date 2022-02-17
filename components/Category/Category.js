import React from 'react'
import { useScrollListener } from '../../hooks/useScrollListener'
import { Item } from './Item'

export const Category = ({ id, items, active, setActive }) => {
  useScrollListener(id, active, setActive)

  return (
    <div id={id}>
      {items.map((item, i) => (
        <Item key={`item_${i}`} {...item} categoryId={id} />
      ))}
    </div>
  )
}
