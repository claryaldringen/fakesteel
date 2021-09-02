import React from 'react'
import { useScrollListener } from '../../hooks/useScrollListener'
import { Item } from './Item'

export const Category = ({ id, items }) => {
  useScrollListener(id)

  return (
    <div id={id}>
      {items.map((item, i) => (
        <Item key={`item_${i}`} {...item} categoryId={id} />
      ))}
    </div>
  )
}
