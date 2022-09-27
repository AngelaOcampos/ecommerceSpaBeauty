import React from 'react'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { db } from "../../utils/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const { categoryId } = useParams();
  const [items, setItems] = useState([]);



  useEffect(() => {
    
    const getData = new Promise((resolve, reject) => {
      
      let queryRef;

      if(categoryId){
        queryRef = query(collection(db,"reservas"), where("categoria", "==", categoryId ))
      } else{
        queryRef = collection(db,"reservas")
      }
      const data = getDocs(queryRef)
      resolve(data)
      
    })


    getData.then((result) => {
      
      const reservas = result.docs.map(doc=>{

        const nuevaReserva = {
          ...doc.data(),
          id: doc.id
        }
        return nuevaReserva
      })

      setItems(reservas)

    })
  }, [categoryId]);

  return (
    <>
      <div className='itemList'>
        <ItemList itemList={items} />
      </div>
    </>

  )
}

export default ItemListContainer