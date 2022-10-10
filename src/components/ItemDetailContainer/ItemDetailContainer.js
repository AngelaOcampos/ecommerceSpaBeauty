import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { reservasId } = useParams();
    const [buscado, setBuscado] = useState(false);
 
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {

            const query = doc(db, "reservas", reservasId)
            const data = getDoc(query)
            resolve(data);
        

        })

        getItem.then((result) => {
            const reserva = {
                ...result.data(),
                id: result.id 
            }

            setItem(reserva)
            setBuscado(true)
        })
    }, [reservasId])


    if(item.nombre){
        return (
            <>
                <ItemDetail item={item} />
            </>
        )
    } else if(buscado){
        return(<h3>no se encontró el item elegido</h3>)
    } else{
        return(<h3>Cargando... Por favor espere.</h3>)
    }
    
}

export default ItemDetailContainer