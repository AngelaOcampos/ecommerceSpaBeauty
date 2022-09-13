import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    

    const [ item, setItem ] = useState([]);
    const{reservasId}= useParams();
    
    const getItem = new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(data);
        }, 2000)

    })
    

    useEffect(() => {
        getItem.then((listaDeItems) => {
            const reserva = listaDeItems.find(item=> item.id === reservasId);

            setItem(reserva)
        })
    }, [])

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer