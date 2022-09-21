import React from "react";
import { Link } from "react-router-dom";
import './BotonFinalizarCompra.css';

const BotonFinalizarCompra = () => {
    return(
        <>
            <div className="contenedorBotonFinalizarCompra">
                <p>Se agregaron los items al carrito</p>
                <button className="botonFinalizarCompra"><Link className="botonFinalizarCompra" to='/carrito'>Finalizar Reserva!</Link></button>
            </div>
        </>
    )
}

export default BotonFinalizarCompra