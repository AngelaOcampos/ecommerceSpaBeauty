import { useContext, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import { CartContex } from '../../context/CartContex';
import BotonFinalizarCompra from '../BotonFinalizarCompra/BotonFinalizarCompra'

const ItemDetail = ({ item }) => {
    const {productCartList, isInCart, addItem} = useContext(CartContex);
    const [productosAgregados, setProductosAgregados] = useState(false);
    
    const itemStock = () => {
        if(isInCart(item.id)){
            const productoExistente = productCartList.find(product => product.id === item.id)
            return item.stock - productoExistente.quantity
        }else{
            return item.stock
        }
    }

    const onAdd = (unidades) => {

        alert(`Se agregaron ${unidades} unidades de ${item.nombre} al carrito`)
        addItem(item, unidades)
        setProductosAgregados(true)
    }


        return (
            <>
                <div className="item-detail">
                    <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
                    <div className="detalle-detail">
                        <h4>{item.nombre}</h4>
                        <h5>${item.precio}</h5>
                        <p className="descripcion-detail">{item.description}</p>
                        
                        {!productosAgregados ? <ItemCount stock={itemStock()} initial={1} onAdd={onAdd}/> : <BotonFinalizarCompra/>}
                        
                    
                    </div>
                </div>


            </>
        )
}

export default ItemDetail