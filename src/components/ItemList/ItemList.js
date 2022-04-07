import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div className='itemList'>
            {
                items.map(item => {
                    return <Item item={item} />
                })
            }
        </div>
    )
}

export default ItemList