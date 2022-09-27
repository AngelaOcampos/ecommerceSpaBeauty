import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../utils/firebase"
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { reservasId } = useParams();

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
        })
    }, [reservasId])

    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer