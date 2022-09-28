import React, { useContext, useState, useEffect} from 'react';
import { CartContex } from '../../context/CartContex';
import './CartContainer.css'
import {Link} from 'react-router-dom'
import {db} from '../../utils/firebase'
import {collection, addDoc} from 'firebase/firestore'

const CartContainer = () => {
    const {productCartList,removeItem, clear, getTotal} = useContext(CartContex);
    const [totalProducto, setTotalProducto] = useState('');
    const [carritoVacio,setCarritoVacio] = useState(false);
    const [idOrder, setIdOrder] = useState("");

    const sendOrder = (event) =>{
        event.preventDefault()
        const order ={
            buyer: {
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items: productCartList,
            date: Date(),
            total: totalProducto
        }
        const queryRef = collection(db, "ordenes")
        addDoc(queryRef, order).then(response =>{
            setIdOrder(response.id)
            clear()
        })
    }

    useEffect(()=>{
        
        setTotalProducto(getTotal)

    }, [productCartList])

    useEffect(()=> {
        productCartList.length > 0 ? setCarritoVacio(false) : setCarritoVacio(true)
    },[productCartList])

   if(!carritoVacio){

        return (
        <>
            <div className='contenedorCarrito'>
                {productCartList.map(item => (
                    <>
                        <div className='contenedorCarrito-items'>
                            <p>item: {item.nombre} cantidad: {item.quantity} precio: {item.precio}</p>
                            <button className='contenedorCarrito-botonRemover' onClick={()=>removeItem(item.id)}>x</button>
                        </div>
                    </>
                ))}
                <p>total: ${totalProducto}</p>
                <button className='contenedorCarrito-botonVaciar' onClick={()=>clear()}>Vaciar Carrito</button>
                <form className='cCForm' onSubmit={sendOrder}>
                <label>Nombre: </label>
                <input className='cCForm-input' type="text"/>
                <label>Teléfono: </label>
                <input className='cCForm-input' type="text"/>
                <label>correo: </label>
                <input className='cCForm-input' type="email"/>
                <button className='cCForm-CompletarReserva' type='submit'>CompletarReserva</button>
                </form>

            </div>
        </>
    )
   } else if(idOrder){

    return(
        <>
            <p>Se creó su orden con id: {idOrder}</p>
            <button className='botonContinuarComprando'><Link className='botonContinuarComprando' to="/">Continuar Reservando!</Link></button>
        </>
    )
    
   } else{
    return(
        <>
        <p>El carrito se encuentra vacío, vuelve al Inicio para seguir Reservando</p>
        <button className='botonContinuarComprando'><Link className='botonContinuarComprando' to="/">Continuar Reservando!</Link></button>
        </>
    )
   }
}

export default CartContainer