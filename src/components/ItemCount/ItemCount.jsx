import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [valorInicial, setValorInicial] = useState(initial);
    const [stockDisponible, setStockDisponible] = useState(stock);

    const restarArticulo = () => {
        if ((valorInicial - onAdd) >= 0){
            setValorInicial(valorInicial - onAdd);
            setStockDisponible(stockDisponible + onAdd);
        } else{
            alert("No se pueden quitar más artículos")
        }
    }

    const sumarArticulo = () => {
        if ((stockDisponible - onAdd) >= 0 ){
            setValorInicial(valorInicial + onAdd);
            setStockDisponible(stockDisponible - onAdd);
        } else { 
            alert('No hay mas Stock')
        }
    }

    return (
        <>
        <div className='contador'>
            <div className='elementoContador' onClick={restarArticulo}>-</div>
            <div className='elementoContadorInicial'>{valorInicial}</div>
            <div className='elementoContador' onClick={sumarArticulo}>+</div>
        </div>
        </>
      )

}

export default ItemCount