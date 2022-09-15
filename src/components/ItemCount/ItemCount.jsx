import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [valorInicial, setValorInicial] = useState(initial);
   

    const restarArticulo = () => {
        if ((valorInicial - 1) >= 0) {
            setValorInicial(valorInicial -1 );
        } else {
            alert("No se pueden quitar más artículos")
        }
    }

    const sumarArticulo = () => {
        if ((stock - 1 - valorInicial) >= 0) {
            setValorInicial(valorInicial + 1);
        } else {
            alert('No hay mas Stock')
        }
    }

    return (
        <>
            <div className='contenedorItemCount'>
                <h5 className="stockTitle">Stock Disponible : {stock}</h5>
                <div className="contador">
                    <button disabled={stock === 0 || valorInicial === 0} className='elementoContador botonContador botonItemCount' onClick={restarArticulo}>-</button>
                    <div className='elementoContador'>{valorInicial}</div>
                    <button disabled={stock === 0 || valorInicial >= stock} className='elementoContador botonContador botonItemCount' onClick={sumarArticulo}>+</button>
                </div>
                <button disabled={stock === 0 || valorInicial === 0} className="botonAgregar  botonItemCount" onClick={() => onAdd(valorInicial)}>Agregar al carrito</button>
            </div>
        </>
    )

}

export default ItemCount