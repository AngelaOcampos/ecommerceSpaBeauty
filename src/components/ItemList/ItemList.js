import Item from "../Item/Item"

const ItemList = ({ itemList }) => {

  return (
    <>
      {itemList?.map((reserva) => {
        return (
          <Item
            key={reserva.id}
            id={reserva.id}
            nombre={reserva.nombre}
            precio={reserva.precio}
            imagen={reserva.imagen}
            stock={reserva.stock}
          />
        )
      })}
    </>
  )
}

export default ItemList