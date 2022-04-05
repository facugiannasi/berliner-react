import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import "./ItemCount.css"


const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const adding = () => {
        if(counter >= 1 && counter < 15){
            setCounter(counter + 1)
        }
    }

    const removing = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }


  return (
    <div className='ItemCount'>
        <Button onClick={removing} variant="primary">-</Button>
        <span className='Counter'>{counter}</span>
        <Button onClick={adding} variant="primary">+</Button>
    </div>
  )
}

export default ItemCount