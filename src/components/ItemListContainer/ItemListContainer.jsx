import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = () => {
  return (
    <ItemCount stock={5} initial={0} onAdd={1}/>
  )
}

export default ItemListContainer