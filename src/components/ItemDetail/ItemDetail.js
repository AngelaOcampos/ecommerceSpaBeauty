import Item from "../Item/Item";


const ItemDetail = ({item}) => {

    return ( 
        <>
            <Item
            key= {item.id}
            segmento= {item.segmento}
            imagen={item.imagen}
            nombre={item.nombre}
            precio={item.precio}
            description={item.description}
            
            
            />
        </>
    )
}

export default ItemDetail