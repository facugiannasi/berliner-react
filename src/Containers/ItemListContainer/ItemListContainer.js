import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemCount />
    </div>
  )
}

export default ItemListContainer