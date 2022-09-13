import React from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import data from './mock-data';
import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = () => {

    const {categoryId} = useParams ();

    const [items, setItems] = useState([]);
    
    const getData = new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })

      useEffect( () => {
        getData.then((result) => {
          if(categoryId){
            const newReserva = result.filter(item=> item.categoria === categoryId)
            setItems(newReserva);
          } else{
            setItems(result)
          }
          
          
        } )
      }, [categoryId] );

  return (
    <>
      <div className='itemList'>
      <ItemList itemList={items}/>
      </div>
    </>
    // <ItemCount stock={5} initial={0} onAdd={1}/>
  )
}

export default ItemListContainer