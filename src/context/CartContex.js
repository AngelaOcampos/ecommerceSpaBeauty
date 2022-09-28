import React from 'react';
import { useState } from 'react';

export const CartContex = React.createContext();

export const CartProvider = ({ children }) => {

    const [productCartList, setProductCartList] = useState([])

    const removeItem = (itemId) => {

        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const clear = () => {

        setProductCartList([])
    }

    const isInCart = (id) =>{

        const enCarrito = productCartList.find(product => product.id === id);
        return enCarrito;
    }

    const addItem = (item, quantity) => {
      
        const newProduct = {
           
            id: item.id,
            nombre: item.nombre,
            quantity: quantity,
            precio: item.precio
        }

        if (isInCart(newProduct.id)){

            const productoExistente = productCartList.find(product => product.id === newProduct.id);
            const newArreglo = productCartList.filter(product=> product.id !== newProduct.id);
            newProduct.quantity += productoExistente.quantity;
            newArreglo.push(newProduct)
            setProductCartList(newArreglo)
        
        } else {
            const newArreglo = [...productCartList];
            newArreglo.push(newProduct);
            setProductCartList(newArreglo);
        }

    }

    const getTotal = () => {
        const valoresCarrito =[];
        productCartList.forEach((producto)=> {
            let valor = parseInt(producto.precio) * parseInt(producto.quantity)
            valoresCarrito.push(valor)
        })
        const total = valoresCarrito.reduce((acumulador, valor)=> acumulador + valor, 0)
        total.toFixed(2)
        return total
    }

    return (
        <CartContex.Provider value={{ productCartList, addItem, removeItem, clear, isInCart, getTotal }}>
            {children}
        </CartContex.Provider>
    )
}
