import Item from "../Item/Item"

const ItemList = ({ itemList }) => {

  return (
    <>
      {itemList?.map((reserva) => {
        return (
          <Item
            nombre={reserva.nombre}
            description={reserva.description}
            precio={reserva.precio}
            imagen={reserva.imagen}
          />
        )
      })}
    </>
  )
}

export default ItemList