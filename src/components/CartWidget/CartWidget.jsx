import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContex } from '../../context/CartContex';
import { useContext, useEffect, useState } from 'react';
import './CartWidget.css'

const CartWidget = () => {

  const {productCartList} = useContext(CartContex);
  const [cantidadproductos, setCantidadproductos] = useState(0);
  const [carritoVacio, setCarritoVacio] = useState(true);

  useEffect(()=>{
    const productosCarrito = [];
    productCartList.forEach((producto) => {
      let cantProducto = parseInt(producto.quantity)
      productosCarrito.push(cantProducto)
    })
    const totalProductos = productosCarrito.reduce((acumulador, valor) => acumulador + valor, 0.)
    setCantidadproductos(totalProductos)
    totalProductos < 1 ? setCarritoVacio(true) : setCarritoVacio(false)
  },[productCartList])


  return (
    <>
    <div className='carrito'>
     <FontAwesomeIcon icon={faShoppingCart}/>
     {carritoVacio === true ? null : <p className='carrito-cantidad'>{cantidadproductos}</p>}
    </div>
    </>
   
  )
}

export default CartWidget