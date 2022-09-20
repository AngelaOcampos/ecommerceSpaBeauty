import React, { useContext } from 'react';
import { CartContex } from '../../context/CartContex';
import './CartContainer.css'

const CartContainer = () => {
    const {productCartList,removeItem, clear} = useContext(CartContex);

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
                <button className='contenedorCarrito-botonVaciar' onClick={()=>clear()}>Vaciar Carrito</button>
            </div>
        </>
    )
}

export default CartContainer