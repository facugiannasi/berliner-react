import React, { useEffect, useState } from 'react'
import { getItems } from '../../api/db'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getItems().then((response) => {
        setItems(response)
      })
    }, 2000)
  }, [])
  

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer