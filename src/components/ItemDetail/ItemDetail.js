
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"




const ItemDetail = ({ item }) => {

    const onAdd = (unidades) => {

        alert(`Se agregaron ${unidades} unidades de ${item.nombre} al carrito`)
    }

    return (
        <>
            <div className="item-detail">
                <img className="imagen-detail" src={item.imagen} alt={item.nombre} />
                <div className="detalle-detail">
                    <h4>{item.nombre}</h4>
                    <h5>{item.precio}</h5>
                    <p className="descripcion-detail">{item.description}</p>
                    <ItemCount stock={item.stock}  initial={1} onAdd={onAdd}/>
                </div>
            </div>


        </>
    )
}

export default ItemDetail