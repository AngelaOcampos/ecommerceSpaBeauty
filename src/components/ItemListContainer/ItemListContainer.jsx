import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import data from './mock-data';
import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    const getData = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })

      useEffect( () => {
        getData.then((result) => {
          setItems(result);
          console.log(result)
        } )
      }, [] );

  return (
    <>
      <ItemList itemList={items}/>
    </>
    // <ItemCount stock={5} initial={0} onAdd={1}/>
  )
}

export default ItemListContainer